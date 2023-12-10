'use client';
import boy from '../public/boy.png'
import girl from '../public/girl.png'
import { FaHeart } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { MdArrowCircleUp } from "react-icons/md";
import Image from 'next/image';
import { useState } from 'react';
import { ImFilePicture } from "react-icons/im";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function CommentInput({ postid = null, }) {
    const { data: session } = useSession();
    const router = useRouter();
    const [isCommentClick, setIsCommentClick] = useState(false);
    const [comment, setComment] = useState('');
    const user = session?.user?.email
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment) {
            alert('留言不能為空')
            return;
        }
        setIsCommentClick(false)
        try {
            const res = await fetch("/api/comment", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    "user": user,
                    "post": postid,
                    "comment": comment,
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to create a comment");
            }
            router.back();
            router.refresh();

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {
                isCommentClick === false ?
                    <div className="sticky bottom-0 h-12 bg-white">
                        <div className="w-full max-w-modalPost mx-auto h-12 flex items-center">
                            <Image alt='' src={session?.user?.gender === 'male' ? boy : girl} width={28} height={28} />
                            <div className="flex flex-1">
                                <input onClick={() => setIsCommentClick(true)} placeholder='留言...' className='w-full pl-2 border-none focus:outline-none ' type="text" />
                            </div>
                            <div className="text-logingray">
                                <button className="mr-4">
                                    <FaHeart size={24} />
                                </button>
                                <button className="mr-4">
                                    <MdSaveAlt size={24} />
                                </button>
                                <button>
                                    <MdArrowCircleUp size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <form onSubmit={handleSubmit} className='pt-8 sticky bottom-0 h-64 border-t bg-white' action="">
                        <div className='flex flex-col w-full h-full max-w-modalPost mx-auto'>
                            <div className='flex items-center'>
                                <Image alt='' src={session?.user?.gender === 'male' ? boy : girl} width={32} height={32} />
                                <p className='ml-2'>{session?.user?.school}</p>
                            </div>
                            <textarea onChange={e => setComment(e.target.value)} className='w-full flex-1 focus:outline-none mt-8' placeholder='留言...'>

                            </textarea>
                            <div className='flex justify-between items-center sticky bottom-0 h-16 text-logingray'>
                                <button type='button'>
                                    <ImFilePicture size={24} />
                                </button>
                                <div className='flex items-center'>
                                    <button type='button' onClick={() => setIsCommentClick(false)} className='mr-4'>取消</button>
                                    <button type='submit' className=' rounded-lg w-16 h-10 bg-submitbtn text-white'>送出</button>
                                </div>
                            </div>
                        </div>
                    </form>
            }

        </>
    )
}