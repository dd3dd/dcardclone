import { connectMongoDB } from "@/lib/mongodb";
import dcardPost from "@/models/dcardPost";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const post = await dcardPost.findOne({ _id: id }).populate('user');
    return NextResponse.json({ post }, { status: 200 });
}
// export async function PUT(request, { params }) {
//     const { id } = params;
//     const { newTitle: title, newContent: content } = await request.json();
//     await connectMongoDB();
//     await Post.findByIdAndUpdate(id, { title, content });
//     return NextResponse.json({ message: "Post updated" }, { status: 200 });
// }
// export async function DELETE(request, { params }) {
//     const { id } = params;
//     await connectMongoDB();
//     await Post.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Post deleted" }, { status: 200 });
// }
