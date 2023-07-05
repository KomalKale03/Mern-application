const User = require('../models/userModel.js');
const { createAccount } = require('./accountController.js')

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
        const user = new User({
            firstName,
            lastName,
            email,
        });
        const savedUser = await user.save();
        // create account for the user
        const account = await createAccount(savedUser.id);
        // set account property of the user to the new account
        savedUser.accountId = account;
        // save updated user
        await savedUser.save();

        res.status(201).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.deleteOne();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


// const asyncHandler = require('express-async-handler');
// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");
// const User = require('../models/userModel');
// const transactions = require("../models/transactionModel");



// //Registering User
// const registerUser = asyncHandler(async (req, res) => {
//     const { email, username, accountId, amount, phone, password, gender,  } = req.body;
//     if ( !email || !username || accountId || !amount || !phone || !password || !gender ) {
//         res.status(400);
//         throw new Error("All fiels are mandatory!");
//     }
//     const userAvailable = await User.findOne({ email });
//     if (userAvailable) {
//         res.status(400);
//         throw new Error("User already exists");
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log(hashedPassword)
//     const user = await User.create({
//         email,
//         username,
//         accountId,
//         amount,
//         phone,
//         password: hashedPassword,
//         gender, 
        
//     });

//     console.log(`user is created ${user}`);
//     if (user) {
//         res.status(201).json({ _id: user.id, email: user.email });
//     } else {
//         res.status(400);
//         throw new Error("user is not valid");
//     }
//     res.json({ message: "Registered successfully" });
//     console.log(req.body);

// });

// //Signing in the user
// const loginUser = asyncHandler(async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             res.status(400);
//             throw new Error("All fiels are mandatory!");
//         }
//         const user = await User.findOne({ email: email });
//         if (user) {
//             const isMatch = await bcrypt.compare(password, user.password);
//             const token = await user.generateAuthToken();
//             console.log(token);
//             res.cookie("jwtoken", token, {
//                 expires: new Date(Date.now() + 25892000000),
//                 httpOnly: true, 
//             });
//             if (!isMatch) {
//                 res.status(400).json({ error: "Invalid dredential" });
//             } else {
//                 res.json({ message: "user login successfuly" });
//             }
//         } else {
//             res.status(400).json({ message: "invalid credentials" });
//         }

//     } catch (err) {
//         console.log(err);
//     }
// });


// //CurrentUser
// const allUser = asyncHandler(async(req,res) =>{
//     try {
//         const user = await User.find();
//         res.send(user);
//         // console.log(User)
//         //   res.status(200).json(User.favourite);
//         // console.log(User.favourite)
//       } catch (e) {
//         console.log(e);
//         res.status(500).json();
//       }

// });

// const customerID = asyncHandler(async(req,res) =>{
//     const data = await User.findById(req.params.id);
//   // console.log(data);
//   if (data) {
//     res.send(data);
//     // console.log(data);
//   }
// })

// const amountstats =  asyncHandler(async(req, res) => {
//     // console.log(req.body)
//     try {
//       const { id, count, id2 } = req.body;
//       const data = await User.findById(id);
//       const data2 = await User.findById(id2);
//       data2.amount = count + data2.amount;
//       data.amount = data.amount - count;
//       data.save();
//       data2.save();
//       res.send("updated successfull");
//     } catch (e) {
//       console.log(e.message);
//     }
//     // data.update({amount:amount1})
  
//     // res.send("The amount is debited rupees from _ and creidet to rupess _ ")
//   });
  
  
//   const transfer =  asyncHandler(async(req, res) => {
//     try {
//     const { id, count, id2 } = req.body;
//     const data = await User.findById(id);
//     const data2 = await User.findById(id2);
//   // console.log(req.body);
//     const newTrans = new transactions({
//       userOne : data.username,
//       userTwo:data2.username,
//       amount:count
//     })
  
//     await newTrans.save();
//   } catch (e) {
//     console.log(e);
//   }
//   })
  
  
//   const histinfo =  asyncHandler(async(req, res) => {
//     try {
//       const data = await transactions.find();
//       res.send(data);
//       // console.log(data)
//     } catch (e) {
//       console.log(e);
//       res.status(500).json();
//     }
//   })
  




// module.exports = { registerUser, loginUser, allUser, customerID, amountstats, transfer, histinfo };

// // "email":"bhavesh.patil@vit.edu.in",
// // "username":"josh", "password":"jLfqkjiYRh",

