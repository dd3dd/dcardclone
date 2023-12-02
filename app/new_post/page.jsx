'use client';
import '../globals.css'
import { useState } from 'react';
import { ImFilePicture } from "react-icons/im";
import Link from 'next/link';
import boy from '../../public/boy.png'
import Image from 'next/image'
import SelectBoardModal from '@/components/SelectBoardModal';

export default function Page() {
    const handleIsModalOpen = () => {
        setModalOpen(!isModalOpen);
    }
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="w-full new_post_height bg-white">
            <SelectBoardModal isModalOpen={isModalOpen} handleIsModalOpen={handleIsModalOpen} />
            <form action="" className="max-w-newpostWidth h-full mx-auto flex flex-col">
                <div className='h-24'></div>
                <div className="h-8">
                    <button onClick={handleIsModalOpen} type='button' className='text-sm p-2 rounded-lg bg-commentgray'>點此選擇發文看板</button>
                </div>
                <div className='flex items-center mt-6 mb-6'>
                    <div>
                        <Image src={boy} width={32} height={32} />
                    </div>
                    <p className='text-sm ml-2'>
                        國立嘉義大學
                    </p>
                </div>
                <textarea maxLength='80' placeholder='標題' className='h-28 text-3xl focus:outline-none' s>
                </textarea>
                <p className='text-xs mb-4'>(0/80)</p>
                <textarea placeholder='敘述' className='focus:outline-none flex-1' >
                </textarea>
                <div className='flex h-16 items-center justify-between'>
                    <button>
                        <ImFilePicture size={24} />
                    </button>
                    <div className='flex items-center'>
                        <Link className='mr-4' href={'/f'}>取消</Link>
                        <button className=' rounded-lg w-20 h-10 bg-submitbtn text-white'>發文</button>
                    </div>
                </div>
            </form>
        </div>

    )
}