import { connectMongoDB } from "@/lib/mongodb";
import dcardPost from "@/models/dcardPost";
import dcardUser from "@/models/dcardUser";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { user, title, content, board, loveCount, commentCount } = await request.json();
    try {
        await connectMongoDB();
        const findUser = await dcardUser.findOne({ email: user });
        if (!findUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        await dcardPost.create({
            user: findUser._id,
            title,
            content,
            board,
            loveCount,
            commentCount
        });
        return NextResponse.json({ message: "Post Registered" }, { status: 201 });
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
export async function GET(request) {
    const board = request.nextUrl.searchParams.get("board");
    await connectMongoDB();
    let post = null;
    if (!board) {
        post = await dcardPost.find().populate('user');
    }
    else {
        post = await dcardPost.find({ board: board }).populate('user');
    }
    return NextResponse.json({ post });
}
