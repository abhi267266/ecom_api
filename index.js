
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("db connected success"))
    .catch((e) => console.log(e));



app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000");
})