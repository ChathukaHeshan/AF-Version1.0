const Panelmember = require("../models/panelmember.model");

const addPanelmember = async (request, response) => {
    const conf = new Panelmember(request.body);

    await conf.save().
    then((data) => {
        response.status(200).send({panelmember: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

module.exports = {
    addPanelmember
};
