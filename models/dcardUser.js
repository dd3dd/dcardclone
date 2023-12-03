import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        school: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const dcardUser = models.dcardUser || mongoose.model("dcardUser", userSchema);
export default dcardUser;
