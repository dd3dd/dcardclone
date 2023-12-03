import { connectMongoDB } from "@/lib/mongodb";
import dcardUser from "@/models/dcardUser";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, name, gender, school } = await request.json();
    await connectMongoDB();
    await dcardUser.create({ email, name, gender, school });
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
// {
//     "email":"11@gmail.com",
//     "name":"test1",
//     "gender":"male",
//     "school":"國立嘉義大學"
// }
