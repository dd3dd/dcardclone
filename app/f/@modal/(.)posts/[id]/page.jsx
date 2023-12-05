import PostModal from "@/components/PostModal";
import Image from "next/image";
import boy from '../../../../../public/boy.png'
import { FaHeart } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import CommentInput from "@/components/CommentInput";
import PostInModal from "@/components/PostInModal";
const getPostById = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/post/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
export default async function Page({ params }) {
    const { id } = params;
    const { post } = await getPostById(id);
    return (
        <PostModal >
            <div className="h-full">
                <PostInModal _id={post._id} title={post.title} content={post.content}
                    board={post.board} loveCount={post.loveCount} commentCount={post.commentCount}
                    user={post.user} />

                <div className="bg-commentgray h-full">
                    <div className="pt-10 mt-10 w-full max-w-modalPost mx-auto">
                        <div className="text-sm flex">
                            <button className='mr-3 w-14 h-8 rounded-3xl text-white bg-downloadapp'>熱門</button>
                            <button className='mr-3 w-20 h-8 rounded-3xl bg-sort-gray'>由舊至新</button>
                            <button className='w-20 h-8 rounded-3xl bg-sort-gray'>由新至舊</button>
                        </div>
                        <p className="text-logingray mt-4 mb-2">
                            共 3 則留言
                        </p>
                        <hr />

                        <div className="h-35 flex pt-5 pb-4">
                            <div className="w-10">
                                <Image alt='' src={boy} width={32} height={32} />
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
                                <Image alt='' src={boy} width={32} height={32} />
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
                <CommentInput />
            </div>

        </PostModal>

    )
}