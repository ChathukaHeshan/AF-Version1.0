import React,  {useEffect, useState, Fragment} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {Typography, Divider } from "antd";
import {DownloadOutlined} from '@ant-design/icons';
import download from 'downloadjs';


const { Title, Text } = Typography;

function ViewGroupPage(props){

    const[groups,setGroups] = useState([]);

    useEffect(() => {
        axios.get('/api/group')
            .then(response => {
                console.log(response.data);
                setGroups(response.data.groups);
            })
            .catch(error => {
                console.log(error);
            })
    },[])

    const downloadFile = async(proposal) => {
        console.log(proposal);
        await axios.get(`/api/uploads/`+proposal)
            .then(response => {
                return download(response.data);
            }).catch(error => {
            console.log(error);
        })
    }


    return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Groups </Title>
            </div>
            {groups.length > 0 && groups.map((item,index) => (
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
                    <a>
                        <DownloadOutlined onClick={() => downloadFile(item.proposal)}/>
                    </a>
                    <br/>
                    <Text strong>
                        {item.presenters != null && item.presenters.name}
                    </Text>
                   

                </Fragment>
            ))}

        </div>
    )
}

export default withRouter(ViewGroupPage);