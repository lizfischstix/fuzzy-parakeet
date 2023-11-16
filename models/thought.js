const { Schema, model } = require('mongoose');
const { type } = require('os');
const reactionSchema = require('./Reaction');
const {date_format} = require('../utils/helpers.js')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStamp => date_format(timeStamp)
        },
        reactions: [reactionSchema],
        username:
        {
            type: String,
            required: true,
        },

    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    },
);
thoughtSchema.virtual(`reactionCount`).get(function () {
    return this.reactions.length;
})
const Thought = model('thought', thoughtSchema);
module.exports = Thought;