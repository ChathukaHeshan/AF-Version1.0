const express = require('express');
const router = express.Router();

const templateService = require('../services/template.service');

module.exports = function(){
    router.post('/', templateService.addTemplate);
    router.post('/uploadFile', templateService.uploadFile);
    router.get('/', templateService.getTemplates);
    router.put('/approve', templateService.approveTemplate);
    router.put('edit/:id', templateService.editTemplate);

    return router;
}