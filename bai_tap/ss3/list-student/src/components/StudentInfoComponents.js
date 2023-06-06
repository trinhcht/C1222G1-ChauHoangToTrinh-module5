import {Component} from "react";

export class StudentInfoComponent extends Component{
    constructor() {
        super();
        this.state ={
            studentList: [
                {
                    id:1,
                    studentName: "Nguyễn Văn A",
                    studentAge: 30,
                    studentAddress: "Hà Nội"
                },
                {
                    id:1,
                    studentName: "Nguyễn Văn B",
                    studentAge: 30,
                    studentAddress: "Đà Nẵng"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h3>Danh sách sinh viên</h3>
                <table className="table table-border">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Adress</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((student,index)=>(
                            <tr key={index}>

                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td>{student.studentAge}</td>
                                <td>{student.studentAddress}</td>
                            </tr>
                        ))


                    }
                    </tbody>
                </table>
            </div>
        )
    }

}