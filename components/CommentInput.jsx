'use client';
import boy from '../public/boy.png'
import { FaHeart } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { MdArrowCircleUp } from "react-icons/md";
import Image from 'next/image';
import { useState } from 'react';
import { ImFilePicture } from "react-icons/im";
export default function CommentInput() {
    const [isCommentClick, setIsCommentClick] = useState(false);
    return (
        <>
            {
                isCommentClick === false ?
                    <div className="sticky bottom-0 h-12 bg-white">
                        <div className="w-full max-w-modalPost mx-auto h-12 flex items-center">
                            <Image alt='' src={boy} width={28} height={28} />
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
                    <form className='pt-8 sticky bottom-0 h-64 border-t bg-white' action="">
                        <div className='flex flex-col w-full h-full max-w-modalPost mx-auto'>
                            <div className='flex items-center'>
                                <Image alt='' src={boy} width={32} height={32} />
                                <p className='ml-2'>國立嘉義大學</p>
                            </div>
                            <textarea className='w-full flex-1 focus:outline-none mt-8' placeholder='留言...'>

                            </textarea>
                            <div className='flex justify-between items-center sticky bottom-0 h-16 text-logingray'>
                                <button type='button'>
                                    <ImFilePicture size={24} />
                                </button>
                                <div className='flex items-center'>
                                    <button onClick={() => setIsCommentClick(false)} className='mr-4'>取消</button>
                                    <button type='submit' className=' rounded-lg w-16 h-10 bg-submitbtn text-white'>送出</button>
                                </div>
                            </div>
                        </div>

                    </form>
            }

        </>
    )
}