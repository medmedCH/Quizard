import React, { Component, Fragment } from 'react';
import {Table , Card, Row, CardBody, Col} from 'reactstrap';
import {connect} from 'react-redux';
import Pagination from "react-js-pagination";
import './style.scss';
import { AppSwitch } from '@coreui/react';
import axios from 'axios';



class Claims extends Component {
  
    constructor(props){
        super(props)
        /*if(!props.claims.length) {
          let list = [];
          for(let i=0;i<200;i++){
            const random = faker.random.number(1);
            console.log(random);
              const item = {
                  id : faker.random.uuid(),
                  title : faker.lorem.sentence(),
                  description : faker.lorem.paragraph(),
                  response : faker.lorem.paragraph(),
                  user : faker.name.findName(),
                  email : faker.internet.email(),
                  solved : random ? true : false ,
                  removed : random ? false : 
                  faker.random.number(1) ? true : false ,
                  date : faker.date.past(10),
                  dateResponse : faker.date.past(10)
              }
              list = [...list,item];
          }
          props.loadState(list);
          
      }*/
    axios.get('http://localhost:5000/claims').then(res => props.loadState(res.data));
        
      
      this.state = {
            filter : false,
            block : false,
            search : "",
            activePage: 1
        }
    }
    search(e){
        this.setState({
            search : e.target.value , activePage :1
        });
    }
    
    handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber});
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

render(){
  const {claims} = this.props;
  const last = this.state.activePage * 10;
  const first = last - 10;
  const data =  claims.filter(claim=>this.state.filter === null? true : this.state.filter===claim.solved)
  .filter(claim => this.state.block === claim.removed)
  .filter(claim => {
      const ch = (claim.user.Firstname + claim.user.Lastname + claim.title + claim.user.email).toLowerCase();
      if(ch.includes(this.state.search.toLocaleLowerCase())) return true
      else return false
  })
  .sort((a,b)=>a.date-b.date);
  const current = data.slice(first, last);
  return (
    <div>
    <Card>
      <CardBody>
        <Row>
          <Col md="4">
          <div className="div-radio">
              { !this.state.block ? <Fragment> <label><input className="radio"  type="radio" name="radio" onChange={()=>this.setState({filter : null , activePage :1})} value="" />All</label> &nbsp;
              <label><input className="radio" type="radio" name="radio" onChange={()=>this.setState({filter : true , activePage :1})} value={true} />Solved</label> &nbsp;
              <label><input className="radio" defaultChecked={true} type="radio" name="radio" onChange={()=>this.setState({filter : false , activePage :1})} value={false} />Not yet</label> &nbsp; </Fragment> : null}
          </div>
          </Col>
          <Col md="4">
            <input type="text" style={{marginTop : "10px"}} className="form-control" value={this.state.search} placeholder="Search" onChange={this.search.bind(this)}/>
          </Col>
          <Col style={{textAlign: "right"}}>
            <div>
              <label style={{fontSize:"30px" , fontWeight: "bold"}}>Blocked</label> &nbsp;
              <AppSwitch className={'mx-1'} variant={'pill'} color={'danger'} label onChange={()=>this.setState({block : !this.state.block , filter : false , activePage:1})} checked={this.state.block} />
            </div>
          </Col>        
        </Row>
      </CardBody>
    </Card>
    { current.length ? <Fragment> <Card>
            <br/>
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center" style={{width : "20%"}}>User</th>
                    <th className="text-center" style={{width : "40%"}}>Title</th>
                    <th className="text-center" style={{width : "20%"}}>E-mail</th>
                    <th className="text-center" style={{width : "20%"}}>Date</th>
                    {this.state.filter === null ? <th className="text-center" style={{width : "30%"}}>Status</th> : null }
                  </tr>
                  </thead>
                  <tbody>
                      {
                          current.map((claim , i) => {
                          return  <tr key={i} onClick={()=>this.props.history.push("/Claims/Claim/"+claim._id)}>
                         {/* <td className="text-center">
                            <div className="avatar">
                              <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                               <span className="avatar-status badge-success"></span> 
                            </div>
                          </td>*/}
                          <td className="text-center">
                        <div>{claim.user.Firstname} {claim.user.Lastname}</div>
                          </td>
                          <td className="text-center">
                            {claim.title}
                          </td>
                          <td className="text-center">
                          <div>{claim.user.email}</div>
                          </td>
                          <td className="text-center">
                          <div>{new Date(claim.date).toLocaleString('en-US')}</div>
                          </td>
                          {this.state.filter === null ?  <td className="text-center">
                          <div>{claim.solved ? <div>Solved</div> : <div>Not yet</div>}</div>
                          </td> : null}
                        </tr>
                          }
                          )
                      }
                  </tbody>
                </Table>
                <br/>
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
          onChange={this.handlePageChange.bind(this)}
          /></div> </Fragment>  :  <p> No data found here!</p> } 
        </div>
  );
}
}
const stateToProps = state => {
  return {
      claims : state.claims.SuperClaims
  }
}
const newState = dispatch =>{
  return {
      loadState : claims =>{
          dispatch({type : "LOAD_STATE_SUPER" , payload : claims})
      }
  }
}
export default connect(stateToProps , newState)(Claims);
