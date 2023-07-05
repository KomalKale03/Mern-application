const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../Controllers/userController.js');

// Create new user
router.post('/', createUser);

// Get users
router.get('/', getUsers);

// Get a single user
router.get('/:id', getUser);

router.put('/:id', updateUser)

// Delete user
router.delete('/:id', deleteUser);

module.exports = router;

// const express = require("express");
// const { registerUser, loginUser, allUser, customerID, amountstats, transfer, histinfo } = require("../Controllers/userController");
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser );
// router.get("/users", allUser);
// router.get("/users/:id", customerID);
// router.put("/user/money/", amountstats);
// router.post("transactions", transfer);
// router.get("/gettransactions", histinfo);


// router.put("/user/money", async (req, res) => {
//     // console.log(req.body)
//     try {
//       const { id, count, id2 } = req.body;
//       const data = await user.findById(id);
//       const data2 = await user.findById(id2);
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
  
  
  router.post("/transactions" , async(req,res) => {
    try {
    const { id, count, id2 } = req.body;
    const data = await user.findById(id);
    const data2 = await user.findById(id2);
  // console.log(req.body);
    const newTrans = new transactions({
      userOne : data.name,
      userTwo:data2.name,
      amount:count
    })
  
    await newTrans.save();
  } catch (e) {
    console.log(e);
  }
  })
  
  
  router.get("/gettransactions", async (req,res) => {
    try {
      const data = await transactions.find();
      res.send(data);
      // console.log(data)
    } catch (e) {
      console.log(e);
      res.status(500).json();
    }
  })
  






module.exports = router;