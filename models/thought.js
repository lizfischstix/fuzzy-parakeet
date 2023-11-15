const { Schema, model } = require('mongoose');
const userSchema = require('./user');
const { type } = require('os');

const reactionSchema =new mongoose.Schema({
    reactionId: {type: Schema.Types.ObjectId, default: new ObjectId},
    reactionBody: {type: String, required: true, max_length: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
})
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
            //CAN I ALSO SET VIRTUALS IN THIS BLOCK?
            virtuals: true,
        },
        id: false,
    }
)