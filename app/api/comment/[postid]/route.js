import { connectMongoDB } from "@/lib/mongodb";
import dcardComment from "@/models/dcardComment";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { postid } = params;
    await connectMongoDB();
    const comment = await dcardComment.find({ post: postid }).populate('user');
    return NextResponse.json({ comment }, { status: 200 });
}