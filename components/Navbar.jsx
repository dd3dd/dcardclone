'use client';
import Image from 'next/image';
import Logo from '../public/logo.svg'
import { RiPencilFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import Link from "next/link";
import SearchInput from './SearchInput';
import { useState } from 'react';
import { useContext } from 'react'
import Context from '@/context/Context'
import { GoTriangleDown } from "react-icons/go";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [hamburger, setHamburger] = useState(false)
    const { isSideBar, setIsSideBar } = useContext(Context);
    const { data: session } = useSession();
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setHamburger(!hamburger);
    };
    const toggleSideBar = () => {
        setIsSideBar(!isSideBar);
    }
    // console.log(session)
    return (
        <div className='w-full h-12 bg-navcolor sticky top-0 z-10'>
            <div className='max-w-7xl h-12 mx-auto'>
                <div className="relative h-full w-full flex justify-between items-center ">
                    <div className='flex flex-1'>

                        <button className="text-white" onClick={toggleSideBar}>
                            <GoTriangleDown className='mx-2' size={24} />
                        </button>
                        <Link className='' href={'/'}>
                            <Image className='mx-4'
                                src={Logo}
                                alt="Logo"
                                width={75}
                                height={75}
                            />
                        </Link>
                        <SearchInput />
                    </div>
                    <div className='hidden md:flex  w-2/5 justify-evenly items-center'>
                        {
                            session ?
                                <>
                                    <Link className='' href={'/new_post'}>
                                        <RiPencilFill className='text-white' size={24} />
                                    </Link>
                                    <Link className='' href={'/'}>
                                        <FaBell className='text-white' size={20} />
                                    </Link>
                                    <Link className='' href={'/'}>
                                        <FaUserFriends className='text-white' size={24} />
                                    </Link>
                                    <Link className='' href={'/'}>
                                        <MdEmail className='text-white' size={24} />
                                    </Link>
                                    <Link className='' href={'/'}>
                                        <IoMdPerson className='text-white' size={24} />
                                    </Link>
                                </>
                                :
                                <></>
                        }
                        {
                            session ?
                                <button onClick={() => signOut()} className='w-20 h-8 rounded-md bg-downloadapp text-white'>登出</button>
                                :
                                <Link className='text-white' href={'/'}> 註冊 / 登入</Link>
                        }

                    </div>
                    <div className="md:hidden  flex justify-end">
                        <button className="text-white" onClick={toggleMenu}>
                            {
                                hamburger === false ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                            }
                        </button>
                    </div>
                </div>
                {
                    isMenuVisible && !session &&
                    < div className='relative md:hidden flex justify-evenly bg-navcolor z-10'>
                        <Link className='text-white' href={'/'}> 註冊 / 登入
                        </Link>
                    </div>
                }
                {
                    isMenuVisible && session &&
                    < div className='relative md:hidden flex justify-evenly bg-navcolor z-10'>
                        <Link className='' href={'/new_post'}>
                            <RiPencilFill className='text-white' size={24} />
                        </Link>
                        <Link className='' href={'/'}>
                            <FaBell className='text-white' size={20} />
                        </Link>
                        <Link className='' href={'/'}>
                            <FaUserFriends className='text-white' size={24} />
                        </Link>
                        <Link className='' href={'/'}>
                            <MdEmail className='text-white' size={24} />
                        </Link>
                        <Link className='' href={'/'}>
                            <IoMdPerson className='text-white' size={24} />
                        </Link>
                        <button onClick={() => signOut()} className='w-20 h-8 rounded-md bg-downloadapp text-white'>登出</button>
                    </div>
                }

            </div>

        </div >

    )
}