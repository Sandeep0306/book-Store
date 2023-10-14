const express = require("express");
const mongoose = require("mongoose");
const mongoURL = require("./config")
const bookRoute = require("./routes/bookRoutes")
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(mongoURL)
.then(() =>{
console.log("our app is connected to database");
    app.listen(PORT, () =>{
        console.log(`our app is listening on port ${PORT}`);
    });
})
.catch((err) =>{
console.log(err);
})
app.use('/books', bookRoute);


app.get('/',(req, res) =>{
    res.send("<h1>HELLO</h1>")
})

