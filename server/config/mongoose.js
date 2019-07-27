const mongoose = require('mongoose');
const connectMongoDb=function () {
    mongoose.connect( process.env.MONGO_URL, { useNewUrlParser: true});
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("\x1b[42m\x1b[92m\x1b[4m","MongoDb Successfully Connected!!")
    });
}

module.exports = {
    connectMongoDb: connectMongoDb
}
