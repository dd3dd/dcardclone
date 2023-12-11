import Post from "./Post"
const boardListMap = {
    'f2e': '前端工程師',
    'softwareengineer': '軟體工程師',
    'food': '美食',
    'job': '工作',
    'money': '理財',
    'pet': '寵物',
    'meme': '梗圖',
    'talk': '閒聊',
    'savemoney': '省錢',
    'game': '遊戲',
    'test': '測試',
    '': '',
}
const fetchAllPosts = async (board) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/post?board=${board}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
export default async function PostList({ board = '' }) {

    const { post } = await fetchAllPosts(boardListMap[board]);
    // const newBoard = board === ''
    //     ? ''
    //     : boardListMap[board];
    // const filteredPosts = newBoard === ''
    //     ? post
    //     : post.filter(v => v.board === newBoard);

    return (
        <div className="">
            {
                post.map(v => <Post key={v._id} user={v.user} id={v._id} board={v.board}
                    title={v.title} content={v.content} loveCount={v.loveCount}
                    commentCount={v.commentCount} />)
            }
        </div>
    )
}