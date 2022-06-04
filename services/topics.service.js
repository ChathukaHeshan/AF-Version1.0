const Topic = require('../models/topics.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.pdf' || ext !== '.doc' || ext !== '.docx' || ext !== '.pptx') {
            return cb(response.status(400).end('only document file formats are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file")

const addTopic = async (request, response) => {
    const topic = new Topic(request.body);

    await topic.save().
    then((data) => {
        response.status(200).send({
            Topic: data,
            success: true,
        }).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

const getTopics = async (request, response) => {
    try {
        const topics = await Topic.find();
        response.status(200).json({ topics: topics });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

const approveTopic = async (request, response) => {
    if(request.body.approve){
        Topic.findByIdAndUpdate(request.body.id, {
            isApproved: true
        }, (error, data) => {
            if (error) {
                console.log(error)
                return response.json({ success: false, error })
            } else {
                response.json({success: true})
                console.log('Topic updated successfully !')
            }
        })
    }else{
        Topic.findByIdAndDelete(request.body.id, function (err, docs) {
            if (err){
                return response.json({ success:false,error: err})
            }
            else{
                return response.json({ success:true})
            }
        });
    }
}

const uploadFile = async(request, response) => {
    upload(request, response, err => {
        if (err) {
            return response.json({success: false, err})
        }
        return response.json({success: true, fileName: response.req.file.filename})
    })
}

module.exports = {
    addTopic,
    getTopics,
    uploadFile,
    approveTopic
};
