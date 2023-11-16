const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const { type } = require('os');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required:true,
            min_length: 1,
            max_length: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now(),
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
        
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
)

module.exports = Thought;