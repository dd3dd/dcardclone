import mongoose, { Schema, models } from "mongoose";

const postSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'dcardUser', required: true, },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        board: {
            type: String,
            required: true,
        },
        loveCount: {
            type: Number,
            required: true,
        },
        commentCount: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

const dcardPost = models.dcardPost || mongoose.model("dcardPost", postSchema);
export default dcardPost;
