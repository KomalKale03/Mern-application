const express = require("express");
const { registerAdmin, loginAdmin} = require("../Controllers/adminController");
const router = express.Router();

router.post("/registerAdmin", registerAdmin);

router.post("/loginAdmin", loginAdmin );



module.exports = router;