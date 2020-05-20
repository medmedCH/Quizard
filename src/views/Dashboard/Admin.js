
import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Row, Col, Input, Table, Card, CardBody } from 'reactstrap';
import Widget04 from '../Widgets/Widget04';
import Pagination from "react-js-pagination";
import './style.scss';
import { withRouter } from 'react-router-dom';

class Admin extends Component {
  constructor(props) {
    super(props);
    Axios.get("http://localhost:5000/users/stats?filter=today")
    .then(res=>this.setState({newUsers:res.data}));
    Axios.get("http://localhost:5000/users/statLastLogin")
    .then(res=>{
      this.setState({
        lastLoginStats:res.data,
        usersNumber : res.data.number
      });
    });

    this.state = {
      newUsers:{
        total: "loading...",
        teachers: "loading...",
        students: "loading...",
        admins: "loading..."
      },
      lastLoginStats:{
        users:[]
      },
      filter : "today",
      userFilter:"all",
      activePage:1,
      usersNumber : 0,
      search : "",
      sort : "recent"
    };
  }

  filterChanged=e=>{
    this.setState({filter : e , newUsers:{
      total: "loading...",
      teachers: "loading...",
      students: "loading...",
      admins: "loading..."
    }});
    Axios.get("http://localhost:5000/users/stats?filter="+e)
    .then(res=>this.setState({newUsers:res.data}));
  }

  sort=e=>{
    this.setState({
      sort : e.target.value,
      activePage :1
    });
  }

  search(e){
    this.setState({
        search : e.target.value , activePage :1
    });
}

handlePageChange(pageNumber) {
  this.setState({activePage: pageNumber});
  document.body.scrollTop = document.documentElement.scrollTop = 420;
}
  render() {
    const data = this.state.lastLoginStats.users
    .filter(user=>user._id!==this.props.moi._id)
    .filter(user=>this.state.userFilter==="all"? true : user.role===this.state.userFilter)
    .filter(user=>this.state.search===""? true : ((user.fullName+user.email+(new Date(user.register)).toLocaleString('en-US')).toLowerCase()).includes(this.state.search.toLowerCase()))
    .sort((u1,u2)=>{
      if(this.state.sort==="recent") return (new Date(u2.lastLogin))-(new Date(u1.lastLogin));
      else return (new Date(u1.lastLogin))-(new Date(u2.lastLogin));
    });
    const last = this.state.activePage * 10;
    const first = last - 10;
    const current = data.slice(first, last);
      return <Fragment>
        <Row>
          <Col>
            <Card><CardBody>
            <label><input className="radio" onChange={()=>this.filterChanged("today")} defaultChecked={true}  type="radio" name="radio1"   value={true} />Today</label> &nbsp;
            <label><input className="radio" onChange={()=>this.filterChanged("yesterday")}  type="radio" name="radio1"  value={true} />Yesterday</label> &nbsp;
            <label><input className="radio" onChange={()=>this.filterChanged("lastWeek")}  type="radio" name="radio1"  value={true} />Last Week</label>
            </CardBody></Card>
          </Col>
          {/*<Col md="3">
             <Input value={this.state.filter} onChange={this.filterChanged.bind(this)} type="select" name="select" id="select">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="lastWeek">Last Week</option>
            </Input><br/> 
          </Col>*/}
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Widget04 icon="icon-user-follow" color="primary" header={this.state.newUsers.total.toString()} value="25">New Users</Widget04>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Widget04 icon="icon-user-follow" color="success" header={this.state.newUsers.admins.toString()} value="25">New Admins</Widget04>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Widget04 icon="icon-user-follow" color="warning" header={this.state.newUsers.teachers.toString()} value="25">New Teachers</Widget04>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Widget04 icon="icon-user-follow" color="info" header={this.state.newUsers.students.toString()} value="25">New Students</Widget04>
          </Col>
        </Row>
        <Card>
          <CardBody>
            <Row>
              <Col md="5">
                <div className="div-radio">
                  <label><input className="radio"  defaultChecked={true} type="radio" name="radio" onChange={()=>this.setState({userFilter : "all" , activePage :1})} value="" />All</label> &nbsp;
                  <label><input className="radio"  type="radio" name="radio" onChange={()=>this.setState({userFilter :"Admin" , activePage :1})} value={true} />Admin</label> &nbsp;
                  <label><input className="radio"  type="radio" name="radio" onChange={()=>this.setState({userFilter :"Teacher" , activePage :1})} value={false} />Teacher</label> &nbsp;
                  <label><input className="radio"  type="radio" name="radio" onChange={()=>this.setState({userFilter :"Student"  , activePage :1})} value={false} />Student</label>
                </div>
              </Col>
              <Col md="4">
                <input type="text" className="form-control" value={this.state.search} placeholder="Search" onChange={this.search.bind(this)}/>
              </Col>
              <Col>
              <Input value={this.state.sort} onChange={this.sort.bind(this)} type="select" name="selecte" id="selecte">
                <option value="recent">the most recent last login date</option>
                <option value="oldest">the oldest last login date</option>
            </Input>
              </Col>        
            </Row>
          </CardBody>
        </Card>
        <b>{data.length} Result(s) Found</b><br/><br/>
        {data.length?
          <Fragment>
          <Card>
          <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center"><i className="icon-people"></i></th>
                <th>User</th>
                <th className="text-center">Email</th>
                {this.state.userFilter==="all" ? <th>Role</th> : null}
                <th className="text-center">Last Login Date</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {current.map((user,i)=>{
                  return <tr key={i} onClick={()=>this.props.history.push("/Single/"+user._id)}>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={user.avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </div>
                    </td>
                    <td>
                      <div>{user.fullName}</div>
                      <div className="small text-muted">
                         Registered: {(new Date(user.register)).toLocaleString('en-US')}
                      </div>
                    </td>
                    <td className="text-center">
                      {user.email}
                    </td>
                    {this.state.userFilter==="all" ? <td>
                      {user.role}
                    </td> : null}
                    <td className="text-center">
                      {(new Date(user.lastLogin)).toLocaleString('en-US')}
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>{user.lastLoginDuration}</strong>
                    </td>
                  </tr> })}
                  </tbody>
                </Table>
              </Card>
              <div style={{display: "flex",
                            justifyContent: "center",
                            alignItems: "center"}}>
              <Pagination
                prevPageText='prev'
                nextPageText='next'
                firstPageText='first'
                lastPageText='last'
                itemClass="page-item"
                linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}/>
        </div>
        </Fragment>
      : null} 
    </Fragment>
  }


}
export default withRouter(Admin);
