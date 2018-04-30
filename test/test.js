const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user_test')
mongoose.connection
  .once('open', () => console.log('MongoDB user_test db is connected....'))
  .on('error', (error) => {
    console.warn('Error! MongoDB user_test db is NOT connected....', error);
  })