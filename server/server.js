const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config()
const connect = async () => {
    await mongoose.connect(process.env.MONGO_DB)
    console.log("Database connected")
}
//mongoose.connection.on()

app.use(express.json())
//app.use(express.static(public))
app.use(express.urlencoded({ extended: true }))

app.listen(8000, function () {
    connect() 
    console.log("app is listening on 8000")
})