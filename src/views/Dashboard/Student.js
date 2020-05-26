import React ,{ Component, Fragment } from "react";
import { Card, Table, Button } from "reactstrap";
import Axios from "axios";

class Student extends Component {
    constructor(props){
        super(props);
        Axios.get("http://localhost:5000/users/quizData/"+props.moi._id).then(res=>console.log(res.data));
    }

    quizData = (quiz,i) =>{
        return <Fragment>
                    <td className="text-center" width="50%">Quiz {i+1}</td>
                    <td className="text-center">{quiz.answered?  quiz.score : "-"}</td>
        </Fragment>
    }
    
    render(){
        console.log(this.props.moi.Quizzs)
        const { Quizzs } = this.props.moi;
        const { note } = this.props.moi;
        return <Fragment>
            <Card>
          <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">Quiz</th>
                <th className="text-center">Score</th>
              </tr>
            </thead>
            <tbody>
            {Quizzs.map((quiz,index)=>{
               return <tr key={index}>
                        {this.quizData(quiz,index)}
                      </tr>
            })}
            </tbody>
                </Table>
              </Card>
            <h1>Your overall average is {note}</h1>
        </Fragment>
    }
}

export default Student;