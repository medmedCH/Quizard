
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AdminDashboard from './Admin';
import TeacherDashboard from '../Classes/Teacherclasses';
import StudentDashboard from './Student';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    if (!props.user) { return props.history.push("/login"); }

    this.state = {

    };
  }


  render() {

    const { user } = this.props;
    const welcoming = () => {
      const date = new Date();
      if (date.getHours() < 12)
        return "Good morning!"
      else if (date.getHours() < 19)
        return "Hello!"
      else return "Good evening!"
    }
  
    if (user)
      return <Fragment>
        <div>
          <h1>{welcoming()} {user.Firstname} {user.Lastname}</h1>
        </div>
        <br/>
        {user.role === "Admin"? <AdminDashboard moi={this.props.user} /> : user.role==="Teacher" ? <TeacherDashboard/> : user.role==="Student"? <StudentDashboard moi={user}/> : null}
      </Fragment>
    else return null;
  }


}
const stateToProps = state => {
  return {
    user: state.auth.user
  }
}
export default connect(stateToProps)(Dashboard);
