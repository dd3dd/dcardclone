import LoginForm from "@/components/LoginForm"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/f");
  return (
    <div className=" relative flex justify-center items-center">
      {/* < div className='w-full max-w-boardModalWidth flex flex-col items-center my-8 bg-white rounded-xl' >
        <p className='text-3xl mt-8 mb-4'>登入</p>
        <LoginForm />
      </div > */}
    </div>
  )
}
