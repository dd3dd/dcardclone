import { connectMongoDB } from "@/lib/mongodb";
import dcardComment from "@/models/dcardComment";
import dcardPost from "@/models/dcardPost";
import dcardUser from "@/models/dcardUser";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { user, post, comment } = await request.json();
    try {
        await connectMongoDB();
        const findUser = await dcardUser.findOne({ email: user });
        const findPost = await dcardPost.findOne({ _id: post });
        if (!findUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        if (!findPost) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }
        await dcardComment.create({
            user: findUser._id,
            post: findPost._id,
            comment
        });
        return NextResponse.json({ message: "Comment Registered" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

}
// {
//     "user":"33@gmail.com",
//     "title":"title3",
//     "content":"content3",
//     "board":"工作"
// }
export async function GET() {
    await connectMongoDB();
    const comment = await dcardComment.find().populate('user').populate('post');
    return NextResponse.json({ comment });
}