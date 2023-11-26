import Image from "next/image"
import QRContainer from '../public/loginimg.png'
export default function LoginQR() {
    return (
        <div className="flex-1">
            <Image
                src={QRContainer}
                width={350}
                height={350}
                alt='board'
            />
            <div className="text-white">
                <p>年輕人都在 Dcard 上討論</p>
                <p>不想錯過任何有趣的話題嗎？
                    趕快加入我們吧！</p>
            </div>
        </div>
    )
}