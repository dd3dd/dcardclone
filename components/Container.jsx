// import Image from "next/image"
// import frontend from '../public/frontend.webp'
// import { FaBell } from "react-icons/fa6";
import PostList from "./PostList";
export default function Container({ board = '' }) {
    return (

        <div className=" rounded-md mt-5 pt-5 px-12 w-full max-w-containerWidth bg-white h-screen">
            <div className="sticky top-12 bg-white">
                {/* <div className="justify-between flex w-full h-16 max-w-postWidth items-center">
                    <div className="flex max-h-10 overflow-hidden">
                        <Image className='rounded-full' width={40} height={40}
                            src={frontend} />
                        <p className="text-3xl ml-2">前端工程師</p>
                    </div>
                    <div className="flex">
                        <button>
                            <FaBell className="text-logingray mr-3" size={20} />
                        </button>
                        <button className="text-sm rounded-md w-16 h-8 bg-followbtn">
                            追蹤中
                        </button>
                    </div>
                </div> */}
                <div className="border-b-2  ml-4 w-full h-16 max-w-postWidth text-md flex items-center">
                    <button className="mr-4">熱門</button>
                    <button className="mx-4 text-logingray">最新</button>
                    <button className="mx-4 text-logingray">規則</button>
                </div>
            </div>
            <PostList board={board} />
        </div>
    )
}