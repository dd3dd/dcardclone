import Image from "next/image"
import { FaRegCommentAlt } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import heart from '../public/heart.webp'
import Link from "next/link";
import PostModal from "./PostModal";

export default function Post({ id = 0, userimg = '', board = '', name = '', date = 0,
    title = '', content = '', loveCount = 0, commentCount = 0 }) {
    return (

        <div className="h-40 mt-12 ml-4 border-b">
            <Link href={`/f/posts/${id}`} scroll={false} >
                <div className="flex h-5 text-sm text-logingray ">
                    <Image className='rounded-full mr-2' src={userimg} width={20} height={20} />
                    <p className="mr-2">{board}</p>
                    <p className="mr-2">‧</p>
                    <p className="">{date}</p>
                </div>
                <div className="mt-4">
                    <p className="text-xl font-semibold">{title}</p>
                    <p className="mt-1">{content}</p>
                </div>
                <div className="flex mt-4  text-logingray h-5">
                    <Image src={heart} width={20} height={20} />
                    <p className="mx-2 ">{loveCount}</p>
                    <FaRegCommentAlt className='mx-2 text-blue-400' size={20} />


                    <p className="">{commentCount}</p>
                    <button className="flex ml-4">
                        <MdSaveAlt className='mx-2' size={20} />
                        收藏
                    </button>
                </div>
            </Link>
        </div >


    )
}