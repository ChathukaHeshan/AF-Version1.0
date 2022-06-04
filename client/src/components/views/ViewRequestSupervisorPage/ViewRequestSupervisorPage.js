import React,  {useEffect, useState, Fragment} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {Typography, Divider } from "antd";
import {DownloadOutlined} from '@ant-design/icons';

const { Title, Text } = Typography;

function ViewRequestSupervisorPage(props){

    const[requestsupervisors,setRequestSupervisors] = useState([]);

    useEffect(() => {
        axios.get('/api/requestsupervisor')
            .then(response => {
                console.log(response.data);
                setRequestsupervisors(response.data.requestsupervisors);
            })
            .catch(error => {
                console.log(error);
            })
    },[])


    return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Request Supervisors </Title>
            </div>
            {requestsupervisors.length > 0 && requestsupervisors.map((item,index) => (
                <Fragment key={index}>
                    <Divider/>
                    <Title level={4}>
                        {item.topic}
                    </Title>
                    <p>
                        {item.description}
                    </p>
                    <p>
                        {item.presenters.name}
                    </p>
                    <br/>

                </Fragment>
            ))}

        </div>
    )
}

export default withRouter(ViewRequestSupervisorPage);