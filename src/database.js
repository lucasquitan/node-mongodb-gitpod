const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lucas:lucas123@clusternotes-5gc21.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected.'))
    .catch( e => console.log(e));