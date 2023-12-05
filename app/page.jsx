import Link from "next/link"
export default function Home() {
  return (
    <div className="max-w-5xl flex flex-col mx-auto text-white">
      <div className="mb-4">
        <h1 className="text-5xl">目前已有功能 : 新增貼文、依不同版顯示該版貼文</h1>
      </div>
      <div >
        <h1 className="text-5xl">待完成功能 : 登入功能(目前都是單一使用者)、留言功能、以及一些細項功能e.g.收藏、點愛心</h1>
      </div>
      <div className="text-5xl mt-8 underline">
        <Link href={'/f'}>
          點我進入文章列表
        </Link>
      </div>
    </div>
  )
}
