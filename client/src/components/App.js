import React, {Suspense} from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadTopicPage from "./views/AddTopicPage/UploadTopicPage";
import UploadGroupPage from "./views/AddGroupPage/UploadGroupPage";
import UploadDocumentPage from "./views/AddDocumentPage/UploadDocumentPage";
import RequestSupervisorPage from "./views/RequestSupervisorPage/RequestSupervisorPage";
import UploadMarkingPage from "./views/AddMarkingPage/UploadMarkingPage";
import UploadSchemePage from "./views/AddSchemePage/UploadSchemePage";
import UploadTemplatePage from "./views/AddTemplatePage/UploadTemplatePage";
import MarkingsPage from "./views/MarkingsPage/MarkingsPage";
import SchemesPage from "./views/SchemesPage/SchemesPage";
import TemplatesPage from "./views/TemplatesPage/TemplatesPage";
import ViewTopicPage from "./views/ViewTopicPage/ViewTopicPage";
import ViewGroupPage from "./views/ViewGroupPage/ViewGroupPage";
import ViewDocumentPage from "./views/ViewDocumentPage/ViewDocumentPage";
import ViewRequestSupervisorPage from "./views/ViewRequestSupervisorPage/ViewRequestSupervisorPage";
import ApproveTopics from "./views/ApproveTopics/ApproveTopics";
import ApproveRequestsupervisors from "./views/ApproveRequestsupervisors/ApproveRequestsupervisors";
import ApproveGroups from "./views/ApproveGroups/ApproveGroups";
import ApproveDocuments from "./views/ApproveDocuments/ApproveDocuments";
import DownloadPage from "./views/DownloadablePage/DownloadablePage";


function App() {

    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <BrowserRouter>
                <NavBar />
                {/*<section>*/}
                <div style={{ paddingTop: '100px', minHeight: 'calc(100vh - 60px)' }}>
                    <Switch >
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/uploadTopic" component={UploadTopicPage} />
                        <Route path="/uploadGroup" component={UploadGroupPage} />
                        <Route path="/uploadDocument" component={UploadDocumentPage} />
                        <Route path="/uploadRequestsupervisor" component={RequestSupervisorPage} />
                        <Route path="/markings" component={MarkingsPage} />
                        <Route path="/schemes" component={SchemesPage} />
                        <Route path="/templates" component={TemplatesPage} />
                        <Route path="/topics" component={ViewTopicPage} />
                        <Route path="/groups" component={ViewGroupPage} />
                        <Route path="/documents" component={ViewDocumentPage} />
                        <Route path="/requestsupervisor" component={ViewRequestSupervisorPage} />
                        <Route path="/uploadMarking" component={UploadMarkingPage} />
                        <Route path="/uploadScheme" component={UploadSchemePage} />
                        <Route path="/uploadTemplate" component={UploadTemplatePage} />
                        <Route path="/reviewTopics" component={ApproveTopics} />
                        <Route path="/reviewGroups" component={ApproveGroups} />
                        <Route path="/reviewDocuments" component={ApproveDocuments} />
                        <Route path="/reviewRequestsupervisor" component={ApproveRequestsupervisors} />
                        <Route path="/downloads" component={DownloadPage} />
                        
                    </Switch>
                    </div>
                {/*</section>*/}
            </BrowserRouter>
          <Footer />
        </Suspense>
      );
}

export default App;
