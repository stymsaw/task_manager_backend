const mongooes = require('mongoose')


const TaskSchema = new mongooes.Schema({
    name: {
        requried: [true, 'must provide name'],
        type: String,
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongooes.model('Task', TaskSchema)