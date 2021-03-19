//?init code
const mongoose = require('mongoose');
const assert = require('assert');
const dbUrl = process.env.DB_URL;

//?connection code
mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (error, connectionStorageVariable) {
    //* check error
    assert.equal(error, null, 'DB Connect Failed .....');

    //* ok
    console.log('database connect success');
    // console.log(connectionStorageVariable); //!commented this (may be it's just used for checking wheteher mongo is connected or not)
  }
);
