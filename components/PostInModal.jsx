import Link from "next/link";
import heart from '../public/heart.webp'
import { MdSaveAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import boy from '../public/boy.png'
import girl from '../public/girl.png'

export default function PostInModal({ _id = null, title = '', content = '', board = '',
    loveCount = 0, commentCount = 0, user = {} }) {
    return (
        <div className="w-full max-w-modalPost mx-auto">
            <div className="flex items-center h-11">
                <Image alt='' className='rounded-full' src={user.gender === 'male' ? boy :
                    girl} width={32} height={32} />
                <p className="text-sm ml-2">{user.school}</p>
            </div>
            <div className='h-4'></div>
            <article>
                <div >
                    <p className="text-3xl">{title}</p>
                </div>
                <div className="mt-3 text-sm flex">
                    <Link className='text-lightblue' href={'/'}>{board}</Link>
                    <p className="text-logingray ml-4">
                        11 月 18 日 21:50
                    </p>
                </div>
                <p className="mt-4 mb-8 leading-7 ">
                    {content}
                </p>
            </article>
            <div className="h-10 flex justify-between text-logingray items-center">
                <div className="flex h-6 ">
                    <Image alt='' className='mr-2' src={heart} width={24} height={24} />
                    <p className='mr-2'>{loveCount}</p>
                    <p className='mr-2'>‧</p>
                    <p>留言 {commentCount}</p>
                </div>
                <div className="flex h-6 items-center">
                    <button className="text-logingray">
                        <FaHeart size={20} />
                    </button>
                    <button className="ml-4">
                        <MdSaveAlt size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}