const express = require('express');
const router = express.Router();

const markingService = require('../services/marking.service');

module.exports = function(){
    router.post('/', markingService.addMarking);
    router.post('/uploadFile', markingService.uploadFile);
    router.get('/', markingService.getMarkings);
    router.put('/approve', markingService.approveMarking);
    router.put('edit/:id', markingService.editMarking);

    return router;
}
