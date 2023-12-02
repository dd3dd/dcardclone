'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { RxCross2 } from "react-icons/rx";
import boy from '../public/boy.png'
import Image from "next/image"
import '../styles/scroll.css'
export default function PostModal({ children }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.back()
    }, [router])

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
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
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="overflow-auto  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-modalWidth h-screen bg-white "
            >
                <div className='h-8'></div>
                <div className='w-full max-w-modalPost mx-auto'>
                    <div>
                        <div className="flex justify-between h-11">
                            <div className="flex items-center">
                                <Image className='rounded-full' src={boy} width={32} height={32} />
                                <p className="text-sm ml-2">國立嘉義大學</p>
                            </div>
                            <button className="text-logingray" onClick={onDismiss}>
                                <RxCross2 size={24} />
                            </button>
                        </div>
                    </div>
                    <div className='h-4'></div>
                </div>
                {children}
            </div>
        </div>
    )
}
