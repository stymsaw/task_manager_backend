const mongooes = require('mongoose')


const connectDB = (url) => {
    return mongooes.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})
}

module.exports = connectDB
