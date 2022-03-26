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
    body:{
        type: String,
        default: 'defBody'
    },
    imageUrl:{
        type: String,
        default: ''
    },

    category: {
        type: ObjectId,
        ref: 'Category'
    }

})

module.exports = model('post', schema);