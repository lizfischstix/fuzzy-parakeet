const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');
// const friendSchema = require('./friend');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    },
);
//HELP! THIS DOESN'T SEEM QUITE RIGHT.  HOW WILL WE KNOW IF ANOTHER USER IS A FRIEND?.
userSchema.virtual(`friendCount`).get(function(){
    return count.User;
})

const User = model('user', userSchema);

model.exports = User;