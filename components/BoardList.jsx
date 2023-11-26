import Image from "next/image"
import frontend from '../public/frontend.webp'
import software from '../public/software.webp'
import food from '../public/food.webp'
import job from '../public/job.webp'
import money from '../public/money.webp'
import pet from '../public/pet.webp'
import meme from '../public/meme.webp'
import chat from '../public/chat.webp'
import savemoney from '../public/savemoney.webp'
import game from '../public/game.webp'
import Board from "./Board"
import '../styles/scroll.css'
export default function BoardList() {

    const boardList = ['前端工程師', '軟體工程師', '美食', '工作', '理財', '寵物', '梗圖',
        '閒聊', '省錢', '遊戲', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa',]
    const boardImg = [frontend, software, food, job, money, pet,
        meme, chat, savemoney, game]
    return (
        <div className="h-boardListHeight overflow-auto">
            <p className="pl-4 my-4 text-sm text-sidebargray">追蹤的看板</p>
            {boardList.map((v, i) => <Board title={v} img={boardImg[i]} />)}
        </div>
    )
}