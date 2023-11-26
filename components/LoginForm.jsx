'use client'
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Link from "next/link";
export default function LoginForm() {
    const [isEmailLogin, setisEmailLogin] = useState(true);
    const [showOtherLogin, setShowOtherLogin] = useState(false)
    const [passwordType, setPasswordType] = useState('password')
    const handleisEmailLogin = (e) => {
        e.preventDefault();
        setisEmailLogin(!isEmailLogin);
    }
    const handlePasswordType = (e) => {
        e.preventDefault();
        setPasswordType(prevType => prevType === 'password' ? 'text' : 'password')
    }
    return (

        < div className='Login max-w-lg flex flex-col items-center my-12 bg-white rounded-xl' >
            <p className='text-3xl mt-16 mb-8'>註冊 / 登入</p>
            <form className='w-3/4' action="">
                {isEmailLogin === true ?
                    <div>
                        <div className='flex w-full justify-between'>
                            <label htmlFor="email">常用信箱</label>
                            <button onClick={handleisEmailLogin} className="text-forgetpass">使用手機登入</button>
                        </div>
                        <input id='email' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入信箱' type="text" />
                    </div> :
                    <div>
                        <div className='flex w-full justify-between'>
                            <label htmlFor="phone">手機號碼</label>
                            <button onClick={handleisEmailLogin} className="text-forgetpass">使用Email註冊/登入</button>
                        </div>
                        <input id='phone' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入手機號碼' type='text' />
                    </div>
                }
                <div className='mt-5'>
                    <label htmlFor="password">密碼</label>
                    <div className="relative">
                        <input id='password' className='w-full h-10 p-2 mt-4 border rounded-md' placeholder='輸入密碼' type={passwordType} />
                        <button onClick={handlePasswordType}>
                            {passwordType === 'password' ?
                                <IoEye size={24} className="absolute top-6 right-2 text-eyegray" /> :
                                <IoEye size={24} className="absolute top-6 right-2 text-submitbtn" />
                            }

                        </button>

                    </div>

                </div>
                <button className='rounded-lg mt-8 w-full h-10 bg-submitbtn text-white
                hover:bg-hoversubmit' type="submit">
                    註冊 / 登入
                </button>
            </form>
            {
                isEmailLogin === true ?
                    <div className=" text-forgetpass text-sm flex mt-4 justify-center">
                        <button >幫助中心</button>
                        <button className="mx-4">未收到驗證信</button>
                        <button >忘記密碼</button>
                    </div> :
                    <button className="text-forgetpass text-sm mt-4">忘記密碼</button>
            }
            <div className="w-full flex justify-center items-center">
                <button onClick={() => setShowOtherLogin(!showOtherLogin)}
                    className="relative text-sm mt-6  text-logingray">其他註冊/登入方式
                </button>
                {showOtherLogin === false ?
                    <GoTriangleUp size={20} className="relative top-3 left-2 text-logingray" /> :
                    <GoTriangleDown size={20} className="relative top-3 left-2 text-logingray" />
                }
            </div>

            {
                showOtherLogin === true &&
                <div className="text-sm w-3/4 flex flex-col mt-4">
                    <button className="relative h-10 border w-full py-2 rounded-md mb-4
                    hover:bg-hovergooglelogin">使用Google帳戶登入
                        <FcGoogle className='absolute top-2 left-2' size={20} />
                    </button>
                    <button className="relative h-10 border w-full py-2 rounded-md mb-4
                    hover:bg-hovergooglelogin">使用Facebook帳戶登入
                        <FaFacebook color="blue" className='absolute top-2 left-2' size={20} />
                    </button>
                    <button className="relative h-10 border w-full py-2 rounded-md mb-4
                    hover:bg-hovergooglelogin">使用Apple登入
                        <FaApple className='absolute top-2 left-2' size={20} />
                    </button>
                </div>
            }
            <p className="absolute bottom-20 text-sm text-logingray">
                註冊/登入即代表您同意遵守
                <span className="underline">
                    <Link href={'/'}> Dcard 使用協議</Link>
                </span>
            </p>
        </div >
    )
}