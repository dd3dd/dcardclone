import PostModal from "@/components/PostModal";
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
export default async function Page({ params }) {
    const { id } = params;
    const { post } = await getPostById(id);
    const { comment } = await getComment(id);
    return (
        <PostModal >
            <div className="h-full flex flex-col">
                <PostInModal _id={post._id} title={post.title} content={post.content}
                    comment={comment}
                    board={post.board} user={post.user} createdAt={post.createdAt} />
                <CommentList comment={comment} />
                <CommentInput postid={post._id} />
            </div>
        </PostModal>

    )
}