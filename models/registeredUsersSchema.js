const mongoose = require('mongoose');

//?collection schema
const registeredUsersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

//user model creation at last
mongoose.model('registeredUsersCollection', registeredUsersSchema);

//export
module.exports = mongoose.model('registeredUsersCollection');
