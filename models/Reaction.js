const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const { type } = require('os');

const reactionSchema =new mongoose.Schema({
    reactionId: {type: Schema.Types.ObjectId, default: new ObjectId},
    reactionBody: {type: String, required: true, max_length: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
});

model.exports = Reacton;