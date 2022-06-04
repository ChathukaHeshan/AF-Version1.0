import React, { Component } from 'react'
import axios from 'axios'
import download from "downloadjs";

export class ApproveTopics extends Component {
    constructor(props){
        super(props)
        this.state={
            topics:[]
        }
    }

    componentDidMount() {
        axios.get('/api/topic').then((response) =>{
            console.log(response.data);
            let wr=[];

            response.data.topics.map((item) => {
                if(!item.isApproved)
                    wr.push(item);
            })

            this.setState({
                topics: wr
            })
        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        axios.get('/api/topic').then((response) =>{
            let wr=[];
            response.data.topics.map((item) => {
                if(!item.isApproved)
                    wr.push(item);
            })

            this.setState({
                topics: wr
            })
        }).catch(err => console.log(err))
    }

    async downloadFile(link){
        console.log(link);
        await axios.get(`/api/uploads/`+link)
            .then(response => {
                return download(response.data,link);
            }).catch(error => {
            console.log(error);
        })
    }

    approveTopic(id,approval){
        const submit = {
            id: id,
            approve: approval
        }

        axios.put('/api/topic',submit).then(response => {
            if(response.data.success){
                alert("Success");
            }else{
                console.log(response.data.error);
            }
        })
    }

    render() {

        return (
            <div style={{backgroundColor: '#FFFAF0'}}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Topic Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Proposal</th>
                    <th scope="col">Approval</th>
                </tr>
                </thead>
                <tbody>
                {this.state.topics.length>0 && this.state.topics.map((item,index) => (
                    <tr key={index}>
                        <td>{item.topic}</td>
                        <td>{item.description}</td>
                        <td><a href={'/api/uploads/'+item.proposal} target="_blank" download={""+item.proposal}>{item.proposal}</a></td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>this.approveTopic(item._id,true)}>Approve</button>
                            <button class="btn btn-danger" onClick={()=>this.approveTopic(item._id,false)}>Decline</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            </div>

        );
    }
}

export default ApproveTopics;
