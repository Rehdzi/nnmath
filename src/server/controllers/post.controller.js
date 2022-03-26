const genericCrud = require('./generic.controller')
const post = require('../model')


module.exports = {
    ... genericCrud(post)
}