import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  const userType = localStorage.getItem('userType');

  if (userType === "admin") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
          <Menu.Item key="mail">
            <a href="/">Home</a>
          </Menu.Item>

          <SubMenu key="topic" title="Topics">
            <Menu.Item key="topics">
              <a href="/topics">Topics</a>
            </Menu.Item>
           
          </SubMenu>

          <SubMenu key="marking" title="Supervisors">
            <Menu.Item key="markings">
              <a href="/markings">Markings</a>
            </Menu.Item>
           
          </SubMenu>

          <Menu.Item key="downloads">
            <a href="/downloads">Downloads</a>
          </Menu.Item>

          <SubMenu key="moderate" title="Admin">
            
            <Menu.Item key="uploadtemplate">
              <a href="/uploadTemplate">Upload Template</a>
            </Menu.Item>
            <Menu.Item key="uploadschemee">
              <a href="/uploadScheme">Upload Marking Scheme</a>
            </Menu.Item>
            <Menu.Item key="adddocument">
                    <a href="/uploadDocument">Submission Types</a>
                </Menu.Item>
          </SubMenu>
        </Menu>
    )
  
  }else if(userType === "panelmember") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>
            <SubMenu key="topic" title="Student Details">
                <Menu.Item key="groups">
                    <a href="/groups">Groups</a>
                </Menu.Item>
                <Menu.Item key="documents">
                    <a href="/documents">View Documents</a>
                </Menu.Item>
                <Menu.Item key="topics">
                    <a href="/topics">Topics</a>
                </Menu.Item>
               
            </SubMenu>
           

            <SubMenu key="marking" title="Supervisors">
                <Menu.Item key="markings">
                    <a href="/markings">Markings</a>
                </Menu.Item>
            </SubMenu>
            
            <SubMenu key="panell" title="Panel">
                <Menu.Item key="reviewwr">
                    <a href="/reviewTopics">Evaluate Topics</a>
                </Menu.Item>
                <Menu.Item key="addTopic">
                    <a href="/uploadMarking">Add Mark Sheets</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="downloads" title="Downloads">
            <Menu.Item key="schemes">
                <a href="/schemes">Marking Scheme</a>
            </Menu.Item>
            </SubMenu>
        </Menu>
    )
  }else if(userType === "student") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="topic" title="Student Details">
                <Menu.Item key="topics">
                    <a href="/topics">Topics</a>
                </Menu.Item>
                <Menu.Item key="addTopic">
                    <a href="/uploadTopic">Request Topics</a>
                </Menu.Item>
                <Menu.Item key="addgroup">
                    <a href="/uploadGroup">Add group</a>
                </Menu.Item>
                <Menu.Item key="groups">
                    <a href="/groups">Groups</a>
                </Menu.Item>
                 <Menu.Item key="requestsupervisors">
                    <a href="/uploadRequestsupervisor">Request Supervisor</a>
                </Menu.Item>
                <Menu.Item key="adddocument">
                    <a href="/uploadDocument">Submit Documents</a>
                </Menu.Item>
                <Menu.Item key="markings">
                    <a href="/markings">Markings</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="downloads" title="Downloads">
            <Menu.Item key="templates">
                <a href="/templates">Templates</a>
            </Menu.Item>
            </SubMenu>
        </Menu>
    )
  }else if(userType === "supervisor") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="topic" title="Student Details">
                <Menu.Item key="groups">
                    <a href="/groups">Groups</a>
                </Menu.Item>
                <Menu.Item key="documents">
                    <a href="/documents">View Documents</a>
                </Menu.Item>
                <Menu.Item key="markings">
                    <a href="/markings">Markings</a>
                </Menu.Item>
               
            </SubMenu>

            <SubMenu key="marking" title="Supervisor">
               
                <Menu.Item key="addTopic">
                    <a href="/uploadMarking">Add Mark Sheets</a>
                </Menu.Item>
                
                <Menu.Item key="reviewdocuments">
                    <a href="/reviewDocuments">Approve Documents</a>
                </Menu.Item>
                <Menu.Item key="reviewrs">
                    <a href="/reviewRequestsupervisor">Approve Requests</a>
                </Menu.Item>
               
            </SubMenu>

            <SubMenu key="downloads" title="Downloads">
            <Menu.Item key="templates">
                <a href="/templates">Templates</a>
            </Menu.Item>
            <Menu.Item key="schemes">
                <a href="/schemes">Marking Scheme</a>
            </Menu.Item>
            </SubMenu>
        

        </Menu>
    )
  }else{
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="Student" title="Student">
               
            </SubMenu>
            <SubMenu key="Supervisor" title="Supervisor">
               
            </SubMenu>
            <SubMenu key="Panel" title="Panel Member">
               
            </SubMenu>

          

        </Menu>
    )
  }
}

export default LeftMenu

