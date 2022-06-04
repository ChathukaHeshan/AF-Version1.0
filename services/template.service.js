const Template = require('../models/template.model');
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

const addTemplate = async (request, response) => {
    const template = new  Template(request.body);

    await template.save().
    then((data) => {
        response.status(200).send({
            Template: data,
            success: true
        }).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    }).catch((err) => {
        response.status(500).send({error: err});
    })
}

const getTemplates = async (request, response) => {
    try {
        const templates = await returnAllTemplatesWithAuthors();
        response.status(200).json({ templates: templates });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

const returnAllTemplatesWithAuthors = () => {
    return  Template.find().populate('author');
}

const returnAllTemplate = () => {
    return  Template.find();
}

const uploadFile = async(request, response) => {
    upload(request, response, err => {
        if (err) {
            return response.json({success: false, err})
        }
        return response.json({success: true, fileName: response.req.file.filename})
    })
}

const editTemplate = async(request, response) => {
    Template.findByIdAndUpdate(request.params.id, {
        $set: request.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return response.json({ success: false, error })
        } else {
            response.json(data)
            console.log(' Template updated successfully !')
        }
    })
}

const approveTemplate = async(request, response) => {
    if(request.body.approve){
        console.log("id",request.body.id)
        Template.findByIdAndUpdate(request.body.id, {
            isApproved: true
        }, (error, data) => {
            if (error) {
                console.log(error)
                return response.json({ success: false, error })
            } else {
                response.json({success: true})
                console.log('Template updated successfully !')
            }
        })
    }else{
        Template.findByIdAndDelete(request.body.id, function (err, docs) {
            if (err){
                return response.json({ success:false,error: err})
            }
            else{
                return response.json({ success:true})
            }
        });
    }
}

module.exports = {
    addTemplate,
    getTemplates,
    uploadFile,
    editTemplate,
    approveTemplate,
    returnAllTemplate
};