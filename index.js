const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 5000;
const URI = 'mongodb+srv://canice:canice@cluster0.csub7q6.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(URI);
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log();
    }
}

connect();

app.get('/', (req, res) => {
    res.send("hello home page")
    console.log("hello home page")
})


app.listen(PORT, () => {
    console.log(`server has started running on port ${PORT}`);
})