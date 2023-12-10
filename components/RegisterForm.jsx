'use client'
import { useState } from "react"
import { IoEye } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [school, setSchool] = useState("");
    const [passwordType, setPasswordType] = useState('password')
    const [error, setError] = useState("");

    const router = useRouter();

    const handlePasswordType = (e) => {
        e.preventDefault();
        setPasswordType(prevType => prevType === 'password' ? 'text' : 'password')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !gender || !school) {
            setError("所有欄位都必須填寫");
            return;
        }
        try {
            const resUserExists = await fetch("/api/userExist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const { user } = await resUserExists.json();

            if (user) {
                setError("此Email已註冊過");
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                    gender,
                    school
                }),
            });
            if (!res.ok) {
                console.log("註冊失敗");
            }
            const form = e.target;
            form.reset();
            router.push("/");
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='w-3/4 mb-8' action="">
            <div>
                <div className='flex w-full justify-between'>
                    <label htmlFor="email">信箱</label>
                    <Link href={'/'} className="text-forgetpass ">已經有帳號了嗎? 點我登入</Link>
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
            <div className='mt-5'>
                <label htmlFor="name">名稱</label>
                <input onChange={(e) => setName(e.target.value)} id='name' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入名稱' type='text' />
            </div>
            <div className='mt-5'>
                <label htmlFor="gender">性別</label>
                <select onChange={(e) => setGender(e.target.value)} className='w-full h-10 p-2 mt-4 border rounded-md' id="gender">
                    <option value=""></option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
            </div>
            <div className='mt-5'>
                <label htmlFor="school">學校</label>
                <input onChange={(e) => setSchool(e.target.value)} id='school' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入學校' type='text' />
            </div>
            {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                </div>
            )}
            <button className='rounded-lg mt-8 w-full h-10 bg-submitbtn text-white
                hover:bg-hoversubmit' type="submit">
                註冊
            </button>
        </form>
    )
}