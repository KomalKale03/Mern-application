const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
})

module.exports = mongoose.model('User', userSchema);

// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const userSchema = mongoose.Schema({
//     email: {
//         type: String,
//         required: [true, "Please fill this field it is mandatory"],
//         unique: [true, "email already exists"],
//     },
//     username: {
//         type: String,
//         required: [true, "Please fill this field it is mandatory"],
//     },
//     accountId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Account'
//     },
//     phone: {
//         type: String,
//         required: [true, "Please fill this field it is mandatory"],
//     },
//     password: {
//         type: String,
//         required: [true, "Please fill this field it is mandatory"],
//     },
//     gender: {
//         type: String,
//         required: [true, "Please fill this field it is mandatory"],
//     },
//     tokens: [
//         {
//             token: {
//                 type: String,
//                 required: true,

//             }
//         }
//     ]

// }, {
//     timestamps: true,
// })

// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET);
//         this.tokens = this.tokens.concat({token: token});
//         await this.save();
//         return token;

//     } catch (err) {
//         console.log(err);
//     }
// }
// module.exports = mongoose.model("User", userSchema);