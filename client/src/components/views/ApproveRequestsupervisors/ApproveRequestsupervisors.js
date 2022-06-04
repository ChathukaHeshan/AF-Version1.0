import React, { Component } from 'react'
import axios from 'axios'
import download from "downloadjs";

export class ApproveRequestsupervisors extends Component {
    constructor(props){
        super(props)
        this.state={
            requestsupervisors:[],
            userName:""
        }
    }

    componentDidMount() {
        axios.get('/api/requestsupervisor').then((response) =>{
            console.log(response.data);
            let wr=[];

            let username = localStorage.getItem('username');

            response.data.requestsupervisors.map((item) => {
                if(!item.isApproved && (item.topic.toUpperCase() === username.toUpperCase()))
                console.log(item.topic,username)
                    wr.push(item);
            })

            this.setState({
                requestsupervisors: wr
            })

        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        let username = localStorage.getItem('username');
        axios.get('/api/requestsupervisor').then((response) =>{
            let wr=[];
            response.data.requestsupervisors.map((item) => {
                if(!item.isApproved && (item.topic.toUpperCase() === username.toUpperCase()))
                    wr.push(item);
            })

            this.setState({
                requestsupervisors: wr
            })
        }).catch(err => console.log(err))
    }

    async downloadFile(link){
        console.log(link);
        await axios.get(`/api/uploads/`+link)
            .then(response => {
                return download(response.data);
            }).catch(error => {
            console.log(error);
        })
    }

    approveRequestsupervisor(id,approval){
        const submit = {
            id: id,
            approve: approval
        }

        axios.put('/api/requestsupervisor',submit).then(response => {
            if(response.data.success){
                alert("Success");
            }else{
                console.log(response.data.error);
            }
        })
    }

    render() {

        return (
            <div style={{backgroundColor: '#F0FFF0'}}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Requested Supervisor</th>
                    <th scope="col">Field of Interest</th>
                    <th scope="col">Proposal</th>
                    <th scope="col">Approval</th>
                </tr>
                </thead>
                <tbody>
                {this.state.requestsupervisors.length>0 && this.state.requestsupervisors.map((item,index) => (
                    <tr key={index}>
                        <td>{item.topic}</td>
                        <td>{item.description}</td>
                        <td><a href={'http://localhost:8070/uploads/'+item.proposal} target="_blank" download={""+item.proposal}>{item.proposal}</a></td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>this.approveRequestsupervisor(item._id,true)}>Approve</button>
                            <button class="btn btn-danger" onClick={()=>this.approveRequestsupervisor(item._id,false)}>Decline</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            </div>

        );
    }
}

export default ApproveRequestsupervisors;