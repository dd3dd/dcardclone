import Image from "next/image";
import boy from '../public/boy.png'
import { FaHeart } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
export default function Comment({ floor = 0, user = {}, comment = '', createdAt = null, updatedAt = null, }) {
    return (
        <>
            <div className="flex pt-5 pb-4">
                <div className="w-10">
                    <Image alt='' src={boy} width={32} height={32} />
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
                            <button>
                                <ImArrowDown size={20} />
                            </button>
                        </div>
                    </div>
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