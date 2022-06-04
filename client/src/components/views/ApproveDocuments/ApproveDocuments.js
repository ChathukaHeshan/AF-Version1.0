import React, { Component } from 'react'
import axios from 'axios'
import download from "downloadjs";

export class ApproveDocuments extends Component {
    constructor(props){
        super(props)
        this.state={
            documents:[],
            userName:""
        }
    }

    componentDidMount() {
        axios.get('/api/document').then((response) =>{
            console.log(response.data);
            let wr=[];
            let username = localStorage.getItem('username');

            response.data.documents.map((item) => {
                if(!item.isApproved && (item.topic.toUpperCase() === username.toUpperCase()))
                console.log(item.topic,username)
                    wr.push(item);
            })

            this.setState({
                documents: wr
            })
        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        let username = localStorage.getItem('username');
        axios.get('/api/document').then((response) =>{
            let wr=[];
            response.data.documents.map((item) => {
                if(!item.isApproved && (item.topic.toUpperCase() === username.toUpperCase()))
                    wr.push(item);
            })

            this.setState({
                documents: wr
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

    approveDocument(id,approval){
        const submit = {
            id: id,
            approve: approval
        }

        axios.put('/api/document',submit).then(response => {
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
                    <th scope="col">Supervisor Name(Mr/Mrs)</th>
                    <th scope="col">Leaders ID</th>
                    <th scope="col">Document</th>
                    <th scope="col">Approval</th>
                </tr>
                </thead>
                <tbody>
                {this.state.documents.length>0 && this.state.documents.map((item,index) => (
                    <tr key={index}>
                        <td>{item.topic}</td>
                        <td>{item.description}</td>
                        <td><a href={'http://localhost:8070/uploads/'+item.proposal} target="_blank" download={""+item.proposal}>{item.proposal}</a></td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>this.approveDocument(item._id,true)}>Approve</button>
                            <button class="btn btn-danger" onClick={()=>this.approveDocument(item._id,false)}>Decline</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            </div>

        );
    }
}

export default ApproveDocuments;