import Comment from "./Comment";
export default function CommentList({ comment = null, }) {
    return (
        <div className="bg-commentgray flex-1">
            <div className="pt-10 mt-10 w-full h-full max-w-modalPost mx-auto ">
                <div className="text-sm flex">
                    <button className='mr-3 w-14 h-8 rounded-3xl text-white bg-downloadapp'>熱門</button>
                    <button className='mr-3 w-20 h-8 rounded-3xl bg-sort-gray'>由舊至新</button>
                    <button className='w-20 h-8 rounded-3xl bg-sort-gray'>由新至舊</button>
                </div>
                <p className="text-logingray mt-4 mb-2">
                    {`共 ${comment.length} 則留言`}
                </p>
                <hr />
                {
                    comment.map((v, i) => <Comment key={v._id} id={v._id} floor={i + 1} user={v.user} comment={v.comment}
                        createdAt={v.createdAt} updatedAt={v.updatedAt} />)
                }
            </div>

        </div>
    )
}