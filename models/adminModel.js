const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please fill this field it is mandatory"],
        unique: [true, "email already exists"],
    },
    username: {
        type: String,
        required: [true, "Please fill this field it is mandatory"],
    },
    phone: {
        type: String,
        required: [true, "Please fill this field it is mandatory"],
    },
    password: {
        type: String,
        required: [true, "Please fill this field it is mandatory"],
    },
    gender: {
        type: String,
        required: [true, "Please fill this field it is mandatory"],
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,

            }
        }
    ]

}, {
    timestamps: true,
})

adminSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;

    } catch (err) {
        console.log(err);
    }
}
module.exports = mongoose.model("Admin", adminSchema);