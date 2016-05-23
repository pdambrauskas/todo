var tasksService = require('../services/tasks_service');
var express = require('express');
var router = express.Router();

var errorResponse = function(error, response) {
  response
    .status(422)
    .send(JSON.stringify(error));
};

/* GET / */
router.get('/', function(request, response) {
  tasksService.all(function (error, tasks) {
    if (error) return errorResponse(error, response);
    response.json(tasks);
  });
});

/* POST / */
router.post('/', function(request, response) {
  var attributes = request.body;
  tasksService.create(attributes, function(error, task) {
    if (error) return errorResponse(error, response);
    response.json(task);
  });
});

/* GET /:id */
router.get('/:id', function(request, response) {
  tasksService.find(request.params.id, function(error, task) {
    if (error) return errorResponse(error, response);
    response.json(task);
  });
});

/* PUT /:id */
router.put('/:id', function(request, response) {
  var attributes = request.body;

  tasksService.update(request.params.id, attributes, function(error, task) {
    if (error) return errorResponse(error, response);
    response.json(task);
  });
});

/* DELETE /:id */
router.delete('/:id', function(request, response) {
  tasksService.destroy(request.params.id, function(error, task) {
    if (error) return errorResponse(error, response);
    response.json(task);
  });
});

module.exports = router;
