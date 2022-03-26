const { model,Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

const schema = new Schema({
    id:{
        type: Number,
        default: ''
    },
    title:{
        type: String,
        default: 'defTitle'
    },
    
    posts: [{
        type: ObjectId,
        ref: 'post'
    }],

})

module.exports = model('category', schema);