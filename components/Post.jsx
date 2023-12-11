import Image from "next/image"
import { FaRegCommentAlt } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import heart from '../public/heart.webp'
import Link from "next/link";
import boy from '../public/boy.png'
import girl from '../public/girl.png'

const getCommentNum = async (postid) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/comment/${postid}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
export default async function Post({ id = null, user = null, board = '',
    title = '', content = '', loveCount = 0, commentCount = 0 }) {
    const { comment } = await getCommentNum(id);
    return (
        <div className="mt-12 ml-4 pb-4 border-b">
            <Link href={`/f/posts/${id}`}  >
                <div className="flex h-5 text-sm text-logingray ">
                    <Image alt='' className='rounded-full mr-2' src={user.gender === 'male' ? boy :
                        girl} width={20} height={20} />
                    <p className="mr-2">{board}</p>
                    <p className="mr-2">‧</p>
                    {/* <p className="">{date}</p> */}
                </div>
                <div className="mt-4">
                    <p className="text-xl font-semibold">{title}</p>
                    <p className="mt-1">{content}</p>
                </div>
                <div className="flex mt-4  text-logingray h-5">
                    <Image alt='' src={heart} width={20} height={20} />
                    <p className="mx-2 ">{loveCount}</p>
                    <FaRegCommentAlt className='mx-2 text-blue-400' size={20} />
                    <p className="">{comment.length}</p>
                    <button className="flex ml-4">
                        <MdSaveAlt className='mx-2' size={20} />
                        收藏
                    </button>
                </div>
            </Link>
        </div >


    )
}