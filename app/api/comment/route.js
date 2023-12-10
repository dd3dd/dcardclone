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

export async function GET() {
    await connectMongoDB();
    const comment = await dcardComment.find().populate('user').populate('post');
    return NextResponse.json({ comment });
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await dcardComment.findByIdAndDelete(id);
    return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
}
export async function PUT(request) {
    const id = request.nextUrl.searchParams.get("id");
    const { user, post, newComment: comment } = await request.json();
    await connectMongoDB();
    await dcardComment.findByIdAndUpdate(id, { user, post, comment });
    return NextResponse.json({ message: "Comment updated" }, { status: 200 });
}