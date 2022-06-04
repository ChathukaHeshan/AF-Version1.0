const express = require('express');
const router = express.Router();

const requestsupervisorService = require('../services/requestsupervisors.service');

module.exports = function(){
    router.post('/', requestsupervisorService.addRequestsupervisor);
    router.post('/uploadFile', requestsupervisorService.uploadFile);
    router.put('/', requestsupervisorService.approveRequestsupervisor);
    router.get('/', requestsupervisorService.getRequestsupervisors);

    return router;
}