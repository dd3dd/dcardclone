import CommentInput from "@/components/CommentInput";
import PostInModal from "@/components/PostInModal";
import CommentList from "@/components/CommentList";
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
const getComment = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/comment/${id}`, {
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
export default async function PostContainer({ id = null, }) {
    const { post } = await getPostById(id);
    const { comment } = await getComment(id);
    return (
        <div className="rounded-md mt-5 pt-10 w-full max-w-containerWidth bg-white min-h-screen">
            <div className="h-full flex flex-col">
                <PostInModal _id={post._id} title={post.title} content={post.content}
                    board={post.board} loveCount={post.loveCount} commentCount={comment.length}
                    user={post.user} />
                <CommentList comment={comment} />
                <CommentInput postid={post._id} />
            </div>
        </div>
    )
}