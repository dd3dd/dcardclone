'use client'
import { useCallback, useRef, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import '../styles/scroll.css'
const boardList = ['前端工程師', '軟體工程師', '美食', '工作', '理財', '寵物', '梗圖',
    '閒聊', '省錢', '遊戲', '測試', '測試', '測試', '測試', '測試',]
export default function SelectBoardModal({ isModalOpen, handleIsModalOpen, handleSelectedBoard }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const onDismiss = useCallback(() => {
        handleIsModalOpen();
    },)
    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current) {
                if (onDismiss) onDismiss()
            }
        },
        [onDismiss, overlay, wrapper]
    )

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') onDismiss()
        },
        [onDismiss]
    )
    const handleSelect = (v) => {
        handleSelectedBoard(v);
        handleIsModalOpen();
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    return (
        <>
            {
                isModalOpen &&
                <div
                    ref={overlay}
                    className=" fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
                    onClick={onClick}
                >
                    <div
                        ref={wrapper}
                        className=" flex flex-col overflow-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        rounded-xl px-16  w-full h-full max-w-boardModalWidth max-h-boardModalHeight bg-white "
                    >
                        <div className='pt-10 pb-3'>
                            <p className='text-2xl'>
                                選擇發文看板
                            </p>
                        </div>
                        <div className='flex mb-3 h-11 w-full items-center border rounded-lg text-logingray'>
                            <IoSearch className='ml-2 ' size={24} />
                            <input placeholder='尋找看板' className='ml-2 flex-1 focus:outline-none' type="text" />
                        </div>
                        <div className='flex-1 overflow-auto '>
                            <p className='text-sm pl-2 text-logingray'>看板</p>
                            <div className='mt-4 '>
                                {
                                    boardList.map((v, i) =>
                                        <div key={i}>
                                            <button onClick={() => handleSelect(v)} className='pl-2 h-11 w-full text-left hover:bg-commentgray'>
                                                {v}
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-full h-9'>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
