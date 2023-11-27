import PostModal from "@/components/PostModal";
import Image from "next/image";
import boy from '../../../../../public/boy.png'
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import heart from '../../../../../public/heart.webp'
import { FaHeart } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
export default function Page({ params }) {
    const { id } = params;
    return (
        <PostModal>
            <div className="h-8"></div>
            <div>
                <div className="w-modalPost mx-auto">
                    <div className="flex justify-between h-11 mb-4">
                        <div className="flex items-center">
                            <Image className='rounded-full' src={boy} width={32} height={32} />
                            <p className="text-sm ml-2">國立嘉義大學</p>
                        </div>
                        <button className="text-logingray mr-4">
                            <RxCross2 size={24} />
                        </button>
                    </div>
                    <article>
                        <div className="h-10">
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
                <div className="mt-10 w-modalPost mx-auto">
                    <div className="text-sm flex">
                        <button className='mr-3 w-14 h-8 rounded-3xl text-white bg-downloadapp'>熱門</button>
                        <button className='mr-3 w-20 h-8 rounded-3xl bg-downloadapp'>由舊至新</button>
                        <button className='w-20 h-8 rounded-3xl bg-downloadapp'>由新至舊</button>
                    </div>
                    <p className="text-logingray mt-4 mb-2">
                        共 3 則留言
                    </p>
                    <hr />

                </div>
            </div>

        </PostModal>

    )
}