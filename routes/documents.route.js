const express = require('express');
const router = express.Router();

const documentService = require('../services/documents.service');

module.exports = function(){
    router.post('/', documentService.addDocument);
    router.post('/uploadFile', documentService.uploadFile);
    router.put('/', documentService.approveDocument);
    router.get('/', documentService.getDocuments);

    return router;
}