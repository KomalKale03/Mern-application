const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Admin = require('../models/adminModel');
const User = require('../models/userModel');
const Transaction = require('../models/transactionModel');
const transactionRoutes = require('../routes/transactionRoutes');



//Registering User
const registerAdmin = asyncHandler(async (req, res) => {
    const { email, username,phone, password, gender } = req.body;
    if (!email || !username || !phone || !password || !gender) {
        res.status(400);
        throw new Error("All fiels are mandatory!");
    }
    const adminAvailable = await Admin.findOne({ email });
    if (adminAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    const admin = await Admin.create({
        email,
        username,
        phone,
        password: hashedPassword,
        gender
    });

    console.log(`admin is created ${admin}`);
    if (admin) {
        res.status(201).json({ _id: admin.id, email: admin.email });
    } else {
        res.status(400);
        throw new Error("user is not valid");
    }
    res.json({ message: "Registered successfully" });
    console.log(req.body);

});

//Signing in the user
const loginAdmin = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            throw new Error("All fiels are mandatory!");
        }
        const admin = await Admin.findOne({ email: email });
        if (admin) {
            const isMatch = await bcrypt.compare(password, admin.password);
            const token = await admin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true, 
            });
            if (!isMatch) {
                res.status(400).json({ error: "Invalid dredential" });
            } else {
                res.json({ message: "admin login successfuly" });
            }
        } else {
            res.status(400).json({ message: "invalid credentials" });
        }

    } catch (err) {
        console.log(err);
    }
});

// exports.getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// exports.getUsersTransactions = async (req, res) => {
//     try {
//         const userId = req.params.userId;

//         // Get all transactions for the user
//         const transactions = await Transaction.find({ userId });

//         res.json({ transactions });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };

module.exports = { registerAdmin, loginAdmin };