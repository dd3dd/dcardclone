'use client';
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
export default function Board({ title, img, route = '' }) {
    const [isStarDark, setIsStarDark] = useState(true)
    const handleLikeBoard = () => {
        setIsStarDark(!isStarDark)
    }
    return (
        <div className="relative  flex text-sidebargray hover:bg-darkblue">
            <Link className='flex-1 pl-4 h-11 flex items-center' href={`${route}`}>
                <Image className='rounded-full mr-2' width={28} height={28} src={img} />
                <p >{title}</p>
            </Link>
            <button className='absolute right-3 top-3 w-5 h-5' onClick={handleLikeBoard}>
                {
                    isStarDark === true ? <FaStar className='text-darkblue' size={20} /> :
                        <FaStar className='text-lightblue' size={20} />
                }
            </button>

        </div>
    )
}