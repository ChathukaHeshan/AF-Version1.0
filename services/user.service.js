const Admin = require('../models/admins.model');
const Panelmember = require('../models/panelmember.model');
const Student = require('../models/student.model')
const Supervisor = require('../models/supervisor.model')

const createAdmins = async (req, res) => {
    const admin = new Admin({
        name: 'admin',
        username: 'admin',
        password: 'admin123',
        isAdmin: true
        
    });

   

    let adminData;

    await admin.save().then((data) => {
        adminData = data;
    }).
        catch((err) => adminData = err.message);

    
    const dataToSend = {
        admin: adminData
       
    }

    res.status(200).send(dataToSend);
}

const createUser = async (req, res) => {
    const user = req.body;

    if(user && user.isSupervisor){
        const supervisor = new Supervisor(user);

        await supervisor.save().then((data) => res.status(200).
        send({
            success:true,
            user: data
        })).catch((err) => res.status(500).send(err.message))

    }else if(user && user.isStudent){
        const student = new Student(user);

        await student.save().then((data) => res.status(200).
        send({
            success:true,
            user:data
        })).catch((err) => res.status(500).send(err.message))
    }else{
        const panelmember = new Panelmember(user);

        await panelmember.save().then((data) => res.status(200).
        send({
            success:true,
            user:data
        })).catch((err) => res.status(500).send(err.message))
    }
}

const login = async (req, res) => {
    console.log(req.body);
    await Admin.findOne({ username: req.body.username }).then((data) => {
        if(req.body.password === data.password){
            res.status(200).send({
                success: true,
                message: 'Login success',
                user: data
            })
        } else{
            res.status(500).send({
                success: false,
                message: 'Invalid password'
            })
        }
    }).catch(async () =>{
       await Panelmember.findOne({ username: req.body.username }).then((data) => {
           if(req.body.password === data.password){
               res.status(200).send({
                   success: true,
                   message: 'Login success',
                   user: data
               })
           } else{
               res.status(500).send({
                   success: false,
                   message: 'Invalid password'
               })
           }
       }).catch(async () => {
           await Student.findOne({ username: req.body.username }).then((data) => {
               if(req.body.password === data.password){
                   res.status(200).send({
                       success: true,
                       message: 'Login success',
                       user: data
                   })
               } else{
                   res.status(500).send({
                       success: false,
                       message: 'Invalid password'
                   })
               }
           }).catch(async ()=>{
               await Supervisor.findOne({ username: req.body.username }).then((data) => {
                   if(req.body.password === data.password){
                       res.status(200).send({
                           success: true,
                           message: 'Login success',
                           user: data
                       })
                   } else{
                       res.status(500).send({
                           success: false,
                           message: 'Invalid password'
                       })
                   }
               }).catch((err) => {
                   res.status(500).send({
                       success: false,
                       message: 'Invalid User',
                       error: err.message
                   })
               })
           })
       })
    })
}

module.exports = {
    login,
    createUser,
    createAdmins
}
