'use client';
import '../globals.css'
import { useState, useEffect } from 'react';
import { GoTriangleDown } from "react-icons/go";
import { ImFilePicture } from "react-icons/im";
import Link from 'next/link';
import boy from '../../public/boy.png'
import girl from '../../public/girl.png'
import Image from 'next/image'
import SelectBoardModal from '@/components/SelectBoardModal';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('點此選擇發文看板');
    const user = session?.user?.email
    useEffect(() => {
        if (!session)
            redirect("/")
    }, [session])
    const handleIsModalOpen = () => {
        setModalOpen(!isModalOpen);
    }
    const handleSelectedBoard = (newstate) => {
        setSelectedBoard(newstate);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedBoard === '點此選擇發文看板') {
            alert("請選擇發文看板");
            return;
        }
        if (!title || !content) {
            alert("標題和內容皆不可為空");
            return;
        }
        try {
            const res = await fetch("/api/post", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    "user": user,
                    "title": title,
                    "content": content,
                    "board": selectedBoard,
                    'loveCount': 0,
                    'commentCount': 0
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to create a topic");
            }
            router.push('/f')
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full new_post_height bg-white">
            <SelectBoardModal isModalOpen={isModalOpen} handleIsModalOpen={handleIsModalOpen}
                handleSelectedBoard={handleSelectedBoard} />
            <form onSubmit={handleSubmit} action="" className="max-w-newpostWidth h-full mx-auto flex flex-col">
                <div className='h-8'></div>
                <div className="h-8">
                    <button onClick={handleIsModalOpen} type='button' className='flex items-center text-sm p-2 rounded-lg
                     bg-commentgray'>{selectedBoard}
                        <GoTriangleDown className='ml-1' />
                    </button>
                </div>
                <div className='flex items-center mt-6 mb-6'>
                    <div>

                        <Image alt='' src={session?.user?.gender === 'male' ? boy : girl} width={32} height={32} />
                    </div>
                    <p className='text-sm ml-2'>
                        {session?.user?.school}
                    </p>
                </div>
                <textarea onChange={(e) => setTitle(e.target.value)} maxLength='80' placeholder='標題' className='h-28 text-3xl focus:outline-none' s>
                </textarea>
                <p className='text-xs mb-4'>{`${title.length}/80`}</p>
                <textarea onChange={(e) => setContent(e.target.value)} placeholder='敘述' className='focus:outline-none flex-1' >
                </textarea>
                <div className='flex h-16 items-center justify-between'>
                    <button type='button'>
                        <ImFilePicture size={24} />
                    </button>
                    <div className='flex items-center'>
                        <Link className='mr-4' href={'/f'}>取消</Link>
                        <button type='submit' className=' rounded-lg w-20 h-10 bg-submitbtn text-white'>發文</button>
                    </div>
                </div>
            </form>
        </div>

    )
}