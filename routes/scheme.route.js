const express = require('express');
const router = express.Router();

const schemeService = require('../services/scheme.service');

module.exports = function(){
    router.post('/', schemeService.addScheme);
    router.post('/uploadFile', schemeService.uploadFile);
    router.get('/', schemeService.getSchemes);
    router.put('/approve', schemeService.approveScheme);
    router.put('edit/:id', schemeService.editScheme);

    return router;
}