import Post from "./Post"
import boy from '../public/boy.png'
import girl from '../public/girl.png'

export default function PostList() {
    const postList = [{
        id: 1, userimg: boy, board: '前端工程師', name: '國立嘉義大學', date: '3天',
        title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
        loveCount: 3, commentCount: 2
    }, {
        id: 2, userimg: girl, board: '閒聊', name: '國立嘉義大學', date: '3天',
        title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
        loveCount: 3, commentCount: 2
    }, {
        id: 3, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
        title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
        loveCount: 3, commentCount: 2
    },
    {
        id: 4, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
        title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
        loveCount: 3, commentCount: 2
    },
    {
        id: 5, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
        title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
        loveCount: 3, commentCount: 2
    },
    {
        id: 6, userimg: boy, board: '心情', name: '國立嘉義大學', date: '3天',
        title: '測試文章', content: '測試內文測試內文測試內文測試內文測試內文測試內文測試內文',
        loveCount: 3, commentCount: 2
    }]
    return (
        <div>
            {postList.map(v => <Post id={v.id} userimg={v.userimg} board={v.board} name={v.name} date={v.date}
                title={v.title} content={v.content} loveCount={v.loveCount}
                commentCount={v.commentCount} />)}
        </div>
    )
}