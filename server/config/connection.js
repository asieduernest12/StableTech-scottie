const mongoose = require('mongoose');

//where did i get this local host info last time??
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3000/StableTech', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
module.exports = mongoose.connection;