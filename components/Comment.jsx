'use client'
import Image from "next/image";
import boy from '../public/boy.png'
import girl from '../public/girl.png'
import { FaHeart } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import { RiPencilFill } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Comment({ id = null, floor = 0, user = {}, comment = '', createdAt = null, updatedAt = null, }) {
    const { data: session } = useSession();
    const [isEdit, setIsEdit] = useState(false);
    const [newComment, setNewComment] = useState(comment);
    const router = useRouter();
    const handleDelete = async () => {
        const confirmed = confirm("確定要刪除?");
        if (confirmed) {
            const res = await fetch(`/api/comment?id=${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete a comment");
            }
            router.refresh();
            router.back();
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/comment?id=${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newComment }),
            });
            if (!res.ok) {
                throw new Error("Failed to update topic");
            }
            setIsEdit(0);

            router.refresh();
            router.back();
        } catch (error) {
            console.log(error);
        }
    }
    const handleEdit = () => {
        setIsEdit(!isEdit);
        setNewComment(comment);
    }

    return (
        <>
            <div className="flex pt-5 pb-4">
                <div className="w-10">
                    <Image alt='' src={user.gender === 'male' ? boy : girl} width={32} height={32} />
                </div>
                <div className="flex-1 ml-1 ">
                    <div className="flex justify-between mb-3 ">
                        <div className="">
                            <p className="text-sm">{user.school}</p>
                        </div>
                        <div className="flex mr-2 text-logingray">
                            <button className="mr-4">
                                <FaHeart size={20} />
                            </button>
                            <button className="mr-4">
                                <ImArrowDown size={20} />
                            </button>
                            {
                                session?.user?.email === user.email && isEdit === false &&
                                <>
                                    <button onClick={handleEdit} className="mr-2">
                                        <RiPencilFill size={20} />
                                    </button>
                                    <button onClick={handleDelete} className="mr-2">
                                        <HiOutlineTrash size={20} />
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                    {
                        session?.user?.email === user.email && isEdit === true &&
                        <>
                            <form onSubmit={handleSubmit} className='w-full flex' action="">
                                <div className="ml-2 w-10/12 h-full flex ">
                                    <input onChange={e => setNewComment(e.target.value)}
                                        value={newComment} className='p-2 w-full h-full' type="text" />
                                    <button className='ml-4 text-green-500' type="submit" >
                                        <FaCheck size={24} />
                                    </button>
                                </div>
                                <button type='button' className='ml-4' onClick={handleEdit}>
                                    <MdCancel size={24} />
                                </button>
                            </form>
                        </>
                    }
                    <div className="">
                        <p className="">
                            {comment}
                        </p>
                    </div>
                    <div className="flex mt-2 text-sm ">
                        <p>{`B${floor}`} ‧</p>
                        <p className="ml-1">{new Date(createdAt).toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}