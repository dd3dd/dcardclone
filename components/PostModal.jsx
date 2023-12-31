'use client'
import { useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { RxCross2 } from "react-icons/rx";
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
                <button className="right-16 top-10 absolute text-logingray" onClick={onDismiss}>
                    <RxCross2 size={24} />
                </button>
                {children}
            </div>
        </div>
    )
}
