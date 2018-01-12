// todo-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongoose = require('mongoose');
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const todo = new Schema({
    name: { type: String, required: true },
    userId: mongoose.Schema.Types.ObjectId,
    status: {
      type: {
        enum: ['pending', 'completed']
      },
      default: 'pending'
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('todo', todo);
};
