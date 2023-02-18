const mongoose = require("mongoose")
const Movie = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    release_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    director:{
        type: String,
        require: true
    },
    cast:{
        type: String,
        default: null,
        require: true
    },
    watch_from:{
        type:String,
        default: null,
        require:true
    },
})
module.exports = mongoose.model("Movie",Movie)