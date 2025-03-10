import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        email: {type: String, required: true, unique: true },
        password: {type: String, required: true}
    },
    {timestamps: true}
)

userSchema.pre("save", async function (next){
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})


const UserModel = mongoose.models?.User || mongoose.model("User", userSchema);

export default UserModel;
