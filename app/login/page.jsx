'use client'
import LoginForm from "@/components/LoginForm";
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import RegisterForm from "@/components/RegisterForm";

export default function Page() {
    const [isLogin, setisLogin] = useState(true);
    const [showOtherLogin, setShowOtherLogin] = useState(false)
    const handleisLogin = (e) => {
        e.preventDefault();
        setisLogin(!isLogin);
    }
    return (
        <div className=" relative flex justify-center items-center">
            < div className='w-full max-w-boardModalWidth flex flex-col items-center my-8 bg-white rounded-xl' >
                <p className='text-3xl mt-8 mb-4'>{isLogin ? '登入' : '註冊'}</p>
                {isLogin ?
                    <LoginForm />
                    :
                    <RegisterForm />
                }
                <button onClick={handleisLogin} className="text-forgetpass mt-4">{isLogin ? '還沒有帳號嗎? 點我註冊' : '已有帳號嗎? 點我登入'}</button>
                <div className="w-full flex justify-center items-center mb-4">
                    <button onClick={() => setShowOtherLogin(!showOtherLogin)}
                        className="relative text-sm mt-4  text-logingray">其他註冊/登入方式
                    </button>
                    {showOtherLogin === false ?
                        <GoTriangleUp size={20} className="relative top-3 left-2 text-logingray" /> :
                        <GoTriangleDown size={20} className="relative top-3 left-2 text-logingray" />
                    }
                </div>
                {
                    showOtherLogin === true &&
                    <div className="text-sm w-3/4 flex flex-col ">
                        <button className="relative h-10 border w-full py-2 rounded-md mb-4
                    hover:bg-hovergooglelogin">使用Google帳戶登入
                            <FcGoogle className='absolute top-2 left-2' size={20} />
                        </button>
                    </div>
                }
            </div >
        </div>
    )
}