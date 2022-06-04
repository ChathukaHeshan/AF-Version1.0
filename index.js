const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');


const userRoute = require('./routes/user.route');
const downloadRoute = require('./routes/downloads.route');
const topicRoute = require('./routes/topics.route');
const groupRoute = require('./routes/groups.route');
const documentRoute = require('./routes/documents.route');
const requestsupervisorRoute = require('./routes/requestsupervisors.route');
const markingRoute = require('./routes/marking.route');
const schemeRoute = require('./routes/scheme.route');
const templateRoute = require('./routes/template.route');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
},(error) =>{
    if(error){
        console.log('Error occurred while connecting to the database: ',error.message);
    }
});

mongoose.connection.once('open',()=>{
    console.log('Database Connected Successfully');
})

app.route('/').get((req,res) => {
    res.send('Test API call');
})


app.use('/user', userRoute());
app.use('/download', downloadRoute());
app.use('/topic', topicRoute());
app.use('/group', groupRoute());
app.use('/document', documentRoute());
app.use('/requestsupervisor', requestsupervisorRoute());
app.use('/marking', markingRoute());
app.use('/scheme', schemeRoute());
app.use('/template', templateRoute());


app.use('/uploads', express.static('uploads'));

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
