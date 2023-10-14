require("dotenv").config();
const mongoURL = process.env.URL;
module.exports = mongoURL;
console.log(mongoURL);
