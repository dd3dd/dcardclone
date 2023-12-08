import Comment from "./Comment";
const show = async (postid) => {
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
export default async function CommentList({ postid = '', }) {
    const { comment } = await show(postid);
    // console.log(comment)
    return (
        <div className="bg-commentgray h-full">
            <div className="pt-10 mt-10 w-full max-w-modalPost mx-auto">
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
                    comment.map((v, i) => <Comment key={v._id} floor={i + 1} user={v.user} comment={v.comment}
                        createdAt={v.createdAt} updatedAt={v.updatedAt} />)
                }
            </div>
        </div>
    )
}