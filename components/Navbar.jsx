import Image from 'next/image';
import Logo from '../public/logo.svg'
import { RiPencilFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import Link from "next/link";
import SearchInput from './SearchInput';
export default function Navbar() {
    return (
        <div className='w-full h-12 bg-navcolor '>
            <div className='max-w-7xl h-12 mx-auto  '>
                <div className="relative h-full w-full flex justify-between items-center ">
                    <div className='flex flex-1'>
                        <Image className='mx-8 '
                            src={Logo}
                            alt="Logo"
                            width={75}
                            height={75}
                        />
                        <SearchInput />
                    </div>
                    <div className='flex w-2/5 justify-evenly items-center'>
                        <Link className='' href={'/'}>
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
                        {/* <Link className='' href={'/login'}> 註冊 / 登入</Link> */}
                        <button className='w-20 h-8 rounded-md bg-downloadapp text-white'>下載App</button>
                    </div>

                </div>
            </div>
        </div>

    )
}