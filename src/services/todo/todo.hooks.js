const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');

const createTodo = require('../../hooks/create-todo');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [hooks.queryWithCurrentUser({
      idField: '_id',
      as: 'userId'
    })],
    get: [],
    create: [createTodo()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
