const express = require('express');
const router = express.Router();

const groupService = require('../services/groups.service');

module.exports = function(){
    router.post('/', groupService.addGroup);
    router.post('/uploadFile', groupService.uploadFile);
    router.put('/', groupService.approveGroup);
    router.get('/', groupService.getGroups);

    return router;
}