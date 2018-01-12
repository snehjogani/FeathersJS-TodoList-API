const todo = require('./todo/todo.service.js');
const users = require('./users/users.service.js');
module.exports = function (app) {
  app.configure(todo);
  app.configure(users);
};
