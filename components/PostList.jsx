import Post from "./Post"
const fetchAllPosts = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/post`, {
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
    const { post } = await fetchAllPosts();
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
        'test': '測試'
    }
    const newBoard = board === ''
        ? ''
        : boardListMap[board];
    const filteredPosts = newBoard === ''
        ? post
        : post.filter(v => v.board === newBoard);


    // const postList = [{
    //     id: 1, userimg: boy, board: '前端工程師', name: '國立嘉義大學', date: '3天',
    //     title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
    //     loveCount: 3, commentCount: 2
    // }, {
    //     id: 2, userimg: girl, board: '閒聊', name: '國立嘉義大學', date: '3天',
    //     title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
    //     loveCount: 3, commentCount: 2
    // }, {
    //     id: 3, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
    //     title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
    //     loveCount: 3, commentCount: 2
    // },
    // {
    //     id: 4, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
    //     title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
    //     loveCount: 3, commentCount: 2
    // },
    // {
    //     id: 5, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
    //     title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
    //     loveCount: 3, commentCount: 2
    // },
    // {
    //     id: 6, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
    //     title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
    //     loveCount: 3, commentCount: 2
    // }]
    return (
        <div>
            {/* {
                filteredPosts.map(v => <Post key={v._id} user={v.user} id={v._id} board={v.board}
                    title={v.title} content={v.content} loveCount={v.loveCount}
                    commentCount={v.commentCount} />)
            } */}
        </div>
    )
}