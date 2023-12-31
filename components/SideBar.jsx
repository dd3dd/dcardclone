'use client';
import Link from "next/link";
import { IoIosListBox } from "react-icons/io";
import { FaHotjar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import BoardList from "./BoardList";
import { useContext } from 'react'
import Context from '@/context/Context'
import '../styles/sidebar-scroll.css'
export default function SideBar() {
    const { isSideBar, setIsSideBar } = useContext(Context);
    return (
        <>
            {
                isSideBar &&
                <div className="w-52 hidden md:flex  bg-mainDarkBlue "></div>
            }
            <div className={`w-52 ${isSideBar ? 'fixed md:hidden z-10' : 'hidden md:flex'} flex flex-col bg-mainDarkBlue h-screen`}>
                <div className="w-full">
                    <div className="flex flex-col text-sidebargray mt-5 text-md">
                        <Link className='pl-4 h-11 flex items-center  hover:bg-darkblue' href={'/'}>
                            <IoIosListBox className='mr-2 text-white' size={25} />
                            所有看板
                        </Link>
                        <Link className='pl-4 h-11 flex items-center hover:bg-darkblue' href={'/'}>
                            <FaHotjar className='mr-2 text-white' size={25} />
                            即時熱門看板
                        </Link>
                        <Link className='pl-4 h-11 flex items-center hover:bg-darkblue' href={'/'}>
                            <FaShop className='mr-2 text-white' size={25} />
                            好物研究室
                        </Link>
                        <Link className='pl-4 h-11 flex items-center hover:bg-darkblue' href={'/'}>
                            <HiMiniTrophy className='mr-2 text-white' size={25} />
                            創作者排行榜
                        </Link>
                        <Link className='pl-4 h-11 flex items-center hover:bg-darkblue' href={'/'}>
                            <FaUserFriends className='mr-2 text-white' size={25} />
                            ACG 專區
                        </Link>
                        <Link className='pl-4 h-11 flex items-center hover:bg-darkblue' href={'/'}>
                            <IoGameController className='mr-2 text-white' size={25} />
                            玩遊戲
                        </Link>
                    </div>
                </div>
                <BoardList />
            </div>

        </>
    )
}