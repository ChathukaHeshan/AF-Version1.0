const Scheme = require('../models/scheme.model');
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

const addScheme = async (request, response) => {
    const scheme = new  Scheme(request.body);

    await scheme.save().
    then((data) => {
        response.status(200).send({
            Scheme: data,
            success: true
        }).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    }).catch((err) => {
        response.status(500).send({error: err});
    })
}

const getSchemes = async (request, response) => {
    try {
        const schemes = await returnAllSchemesWithAuthors();
        response.status(200).json({ schemes: schemes });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

const returnAllSchemesWithAuthors = () => {
    return  Scheme.find().populate('author');
}

const returnAllScheme = () => {
    return  Scheme.find();
}

const uploadFile = async(request, response) => {
    upload(request, response, err => {
        if (err) {
            return response.json({success: false, err})
        }
        return response.json({success: true, fileName: response.req.file.filename})
    })
}

const editScheme = async(request, response) => {
    Scheme.findByIdAndUpdate(request.params.id, {
        $set: request.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return response.json({ success: false, error })
        } else {
            response.json(data)
            console.log(' Marking Schema updated successfully !')
        }
    })
}

const approveScheme = async(request, response) => {
    if(request.body.approve){
        console.log("id",request.body.id)
        Scheme.findByIdAndUpdate(request.body.id, {
            isApproved: true
        }, (error, data) => {
            if (error) {
                console.log(error)
                return response.json({ success: false, error })
            } else {
                response.json({success: true})
                console.log('Workshop updated successfully !')
            }
        })
    }else{
        Scheme.findByIdAndDelete(request.body.id, function (err, docs) {
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
    addScheme,
    getSchemes,
    uploadFile,
    editScheme,
    approveScheme,
    returnAllScheme
};