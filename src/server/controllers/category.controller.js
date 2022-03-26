const genericCrud = require('./generic.controller')
const сategory = require('../model')


module.exports = {
    ... genericCrud(сategory)
}