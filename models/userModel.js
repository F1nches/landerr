// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// create a schema
var Account = new Schema({
  user: String,
  password: String
});

Account.plugin(passportLocalMongoose);

// create a model using the schema
// make this available to our users in our Node applications
module.exports = mongoose.model('Account', Account);
