import React,  {useEffect, useState, Fragment} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import download from 'downloadjs';
import {Typography, Divider } from "antd";
import {DownloadOutlined} from '@ant-design/icons';

const { Title, Text } = Typography;

function TemplatesPage(props){

    const[templates,setTemplates] = useState([]);

    useEffect(() => {
        axios.get('/api/template')
            .then(response => {
                console.log(response.data);
                setTemplates(response.data.templates);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const downloadFile = async(link) => {
        console.log(link);
        await axios.get(`/api/uploads/`+link)
            .then(response => {
                return download(response.data);
            }).catch(error => {
            console.log(error);
        })
    }

    return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Templates </Title>
            </div>
            {templates.length > 0 && templates.map((item,index) => (
                <Fragment key={index}>
                    <Divider />
                    <Title level={4}>
                        {item.topic}
                    </Title>
                    <p>
                        {item.description}
                    </p>
                    <a>
                        <DownloadOutlined onClick={() => downloadFile(item.link)}/>
                    </a>
                    <br/>
                    <Text strong>
                        {item.author != null && item.author.name}
                    </Text>
                </Fragment>
            ))}

        </div>
    )
}

export default withRouter(TemplatesPage);