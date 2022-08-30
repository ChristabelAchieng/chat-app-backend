const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


//sign up

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileimageUrl: {
        type: String,
    },
    username: {
        type: String,
        required: true
    }
});




userSchema.pre("save", async function(next) 
{
    try {
        if (!this.isModified("password")) {
            return next();
        }
        let hashedPassword = await bcrypt.hash
        (this.password, 10);
        this.password = hashedPassword;
        return next();        
        } catch (err) {
            return next(err);
        }
});

//sign in 

userSchema.methods.comparePassword = async function
(typedPassword,next) {
    try{
        let isMatch = await bcrypt.compare(typedPassword,
        this.password);
        return isMatch;
        }catch (err) {
        return next(err);
    }
};

const User = mongoose.model("User", userSchema);

module.exports = User;