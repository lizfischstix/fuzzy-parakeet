const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const { type } = require('os');
const {date_format} = require('../utils/helpers.js')

const reactionSchema = new Schema({
    reactionId: {type: Schema.Types.ObjectId, default: () =>  new Types.ObjectId()},
    reactionBody: {type: String, required: true, max_length: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now(),
    get: timeStamp => date_format(timeStamp)
    },
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
    _id: false,
},
);

model.exports = reactionSchema;