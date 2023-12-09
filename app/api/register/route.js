import { connectMongoDB } from "@/lib/mongodb";
import dcardUser from "@/models/dcardUser";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
    const { email, password, name, gender, school } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await dcardUser.create({ email, password: hashedPassword, name, gender, school });
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
// {
//     "email":"11@gmail.com",
//     "name":"test1",
//     "gender":"male",
//     "school":"國立嘉義大學"
// }
