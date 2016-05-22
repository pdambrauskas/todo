var tasksService = require('../services/tasks_service');
var express = require('express');
var router = express.Router();

/* GET /tasks */
router.get('/', function(request, response, next) {
  tasksService.all(function (error, tasks) {
    if (error) return next(err);
    response.json(tasks);
  });
});

/* POST /tasks */
router.post('/', function(request, response, next) {
  tasksService.create(request.body, function(error, task) {
    if (error) return next(err);
    response.json(task);
  });
});

/* GET /tasks/id */
router.get('/:id', function(request, response, next) {
  tasksService.find(request.params.id, function(error, task) {
    if (error) return next(error);
    response.json(task);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(request, response, next) {
  tasksService.update(request.params.id, request.body, function(error, task) {
    if (error) return next(error);
    response.json(task);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(request, response, next) {
  tasksService.destroy(request.params.id, function(error, task) {
    if (error) return next(error);
    response.json(task);
  });
});

module.exports = router;
