const express = require('express');
const router = express.Router();

const topicService = require('../services/topics.service');

module.exports = function(){
    router.post('/', topicService.addTopic);
    router.post('/uploadFile', topicService.uploadFile);
    router.put('/', topicService.approveTopic);
    router.get('/', topicService.getTopics);

    return router;
}
