'use client'
import PostModal from "@/components/PostModal";
import Image from "next/image";
import boy from '../../../../../public/boy.png'
import Link from "next/link";
import heart from '../../../../../public/heart.webp'
import { FaHeart } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { ImArrowDown } from "react-icons/im";
import { MdArrowCircleUp } from "react-icons/md";
export default function Page({ params }) {
    const { id } = params;

    return (
        <PostModal >
            <div className="">
                <div className="w-full max-w-modalPost mx-auto">
                    <article>
                        <div >
                            <p className="text-3xl">轉職 前端工程師和UI怎麼合作</p>
                        </div>
                        <div className="mt-3 text-sm flex">
                            <Link className='text-lightblue' href={'/'}>前端工程師</Link>
                            <p className="text-logingray ml-4">
                                11 月 18 日 21:50
                            </p>
                        </div>
                        <p className="mt-4 mb-8 leading-7 ">
                            各位好，我剛從北科大資工碩班畢業，之前寫的是C++，研究題目是比較偏硬體的，但覺得自己對硬體其實興趣缺缺，但是因為自己一直對平面設計有興趣，所以想轉職做做前端工程師，最近有在看一些網路上的課程，但我覺得有點搞不清楚前端和UI怎麼合作，我看有一些課程是教你寫前端，有一些是教你做UI的prototype，但我不知道UI畫出來的那些東西是可以匯出(?)給前端用嗎，比如他做了很漂亮的介面出來之後是要怎麼套到前端呢，他匯出一個檔案，或是很多檔案之類的嗎?因為我希望可以做一個作品集裡面的網站我可以自己設計UI和實作網頁，目前目標是希望可以做出一個類似104求職網，以及一個類似FB的東西。

                            還請各位開釋QQ感謝QQ
                        </p>
                    </article>
                    <div className="h-10 flex justify-between text-logingray items-center">
                        <div className="flex h-6 ">
                            <Image className='mr-2' src={heart} width={24} height={24} />
                            <p className='mr-2'>5</p>
                            <p className='mr-2'>‧</p>
                            <p>留言 27</p>
                        </div>
                        <div className="flex h-6 items-center">
                            <button className="text-logingray">
                                <FaHeart size={20} />
                            </button>
                            <button className="ml-4">
                                <MdSaveAlt size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-commentgray">
                    <div className="pt-10 mt-10 w-full max-w-modalPost mx-auto">
                        <div className="text-sm flex">
                            <button className='mr-3 w-14 h-8 rounded-3xl text-white bg-downloadapp'>熱門</button>
                            <button className='mr-3 w-20 h-8 rounded-3xl bg-downloadapp'>由舊至新</button>
                            <button className='w-20 h-8 rounded-3xl bg-downloadapp'>由新至舊</button>
                        </div>
                        <p className="text-logingray mt-4 mb-2">
                            共 3 則留言
                        </p>
                        <hr />

                        <div className="h-35 flex pt-5 pb-4">
                            <div className="w-10">
                                <Image src={boy} width={32} height={32} />
                            </div>
                            <div className="flex-1 ml-1 ">
                                <div className="flex justify-between mb-3 ">
                                    <div className="">
                                        <p className="text-sm">國立嘉義大學</p>
                                    </div>
                                    <div className="flex mr-2 text-logingray">
                                        <button className="mr-4">
                                            <FaHeart size={20} />
                                        </button>
                                        <button>
                                            <ImArrowDown size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="">
                                        平面設計跟 UI 還是兩種領域範疇，UI 跟使用者體驗有著不可分離的關係，他不是排版跟視覺設計這麼簡單，很多時候考量到人的行為、感受跟思考、相關產業等因果關係，導致在UI 設計前後，需要UX的專業研究與設計、分析一起完成！
                                    </p>
                                </div>
                                <div className="flex mt-2 text-sm ">
                                    <p>B1 ‧</p>
                                    <p>11 月 20 日 22:20</p>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="h-35 flex pt-5 pb-4">
                            <div className="w-10">
                                <Image src={boy} width={32} height={32} />
                            </div>
                            <div className="flex-1 ml-1 ">
                                <div className="flex justify-between mb-3 ">
                                    <div className="">
                                        <p className="text-sm">國立嘉義大學</p>
                                    </div>
                                    <div className="flex mr-2 text-logingray">
                                        <button className="mr-4">
                                            <FaHeart size={20} />
                                        </button>
                                        <button>
                                            <ImArrowDown size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="">
                                        平面設計跟 UI 還是兩種領域範疇，UI 跟使用者體驗有著不可分離的關係，他不是排版跟視覺設計這麼簡單，很多時候考量到人的行為、感受跟思考、相關產業等因果關係，導致在UI 設計前後，需要UX的專業研究與設計、分析一起完成！
                                    </p>
                                </div>
                                <div className="flex mt-2 text-sm">
                                    <p>B1 ‧</p>
                                    <p>11 月 20 日 22:20</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="sticky bottom-0 h-12 bg-white">
                    <div className="w-full max-w-modalPost mx-auto h-12 flex items-center">
                        <Image src={boy} width={28} height={28} />
                        <div className="flex flex-1">
                            <input onClick={() => alert('aa')} placeholder='留言...' className='w-full pl-2 border-none focus:outline-none ' type="text" />
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
            </div>

        </PostModal>

    )
}