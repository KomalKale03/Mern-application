const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/bank').then(() => {
    console.log("connection sucessfull")
}).catch((e) => {
    console.log("failed to connect");
})

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("HELLO UR READY FOR AUTHENTICATE")
})

app.use(cors())
app.use(express.json());
app.get('/api', (req, res) => res.send('Server running'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/accounts', require('./routes/accountRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/admin',require('./routes/adminRoutes'));
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("front/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front','index.html'));
    })
}

app.listen(port, () => {
    console.log(`website is running on ${port}`);
})
