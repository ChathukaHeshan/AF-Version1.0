const express = require('express');
const router = express.Router();

const panelmemberService = require('../services/panelmember.service');

module.exports = function(){
    router.post('/', panelmemberService.addPanelmember);

    return router;
}
