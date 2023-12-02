'use client'
import { useCallback, useRef, useEffect } from 'react'

export default function SelectBoardModal({ isModalOpen, handleIsModalOpen }) {
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
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    return (
        <>
            {isModalOpen &&
                <div
                    ref={overlay}
                    className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
                    onClick={onClick}
                >
                    <div
                        ref={wrapper}
                        className="flex flex-col overflow-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        rounded-xl px-16 pb-9 w-full h-full max-w-boardModalWidth max-h-boardModalHeight bg-white "
                    >
                        <div className='pt-10 pb-3'>
                            <p className='text-2xl'>
                                選擇發文看板
                            </p>
                        </div>
                        <div className='flex-1'>
                            <div className='flex mb-3 h-11 w-full items-center border rounded-lg'>
                                <p>aa</p>
                                <input placeholder='尋找看板' className='flex-1 focus:outline-none' type="text" />
                            </div>
                            <div className='px-3'>
                                <p className='text-sm'>看板</p>
                            </div>

                        </div>
                    </div>
                </div>}
        </>
    )
}
