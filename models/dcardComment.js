import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'dcardUser', required: true, },
        post: { type: Schema.Types.ObjectId, ref: 'dcardPost', required: true, },
        comment: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

const dcardComment = models.dcardComment || mongoose.model("dcardComment", commentSchema);
export default dcardComment;
