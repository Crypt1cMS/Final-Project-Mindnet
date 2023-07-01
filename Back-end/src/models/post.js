const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    image:{
        type: String

    },
    content: {
        type: String,
        max: 500
       
    },
    likes: {
        type: Array,
        default: [],

    }
});

module.exports = mongoose.model('Post', postSchema);