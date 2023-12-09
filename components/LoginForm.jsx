'use client'
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoEye } from "react-icons/io5";
export default function LoginForm() {
    const [passwordType, setPasswordType] = useState('password')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("/f");
        } catch (error) {
            console.log(error);
        }
    };

    const handlePasswordType = (e) => {
        e.preventDefault();
        setPasswordType(prevType => prevType === 'password' ? 'text' : 'password')
    }
    return (
        <form onSubmit={handleSubmit} className='w-3/4' action="">
            <div>
                <div className='flex w-full justify-between'>
                    <label htmlFor="email">信箱</label>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} id='email' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入信箱' type="text" />
            </div>
            <div className='mt-5'>
                <label htmlFor="password">密碼</label>
                <div className="relative">
                    <input onChange={(e) => setPassword(e.target.value)} id='password' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入密碼' type={passwordType} />
                    <button onClick={handlePasswordType}>
                        {passwordType === 'password' ?
                            <IoEye size={24} className="absolute top-6 right-2 text-eyegray" /> :
                            <IoEye size={24} className="absolute top-6 right-2 text-submitbtn" />
                        }
                    </button>
                </div>
            </div>
            {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                </div>
            )}
            <button className='rounded-lg mt-8 w-full h-10 bg-submitbtn text-white
                hover:bg-hoversubmit' type="submit">
                登入
            </button>
        </form>
    )
}