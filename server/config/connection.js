const mongoose = require('mongoose');
require("dotenv").config()


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("MongoDB connection established..."))
.catch((error)=>console.error("MongoDB connection failed:", error.message))


