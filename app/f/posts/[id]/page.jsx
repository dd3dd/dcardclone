import SideBar from "@/components/SideBar";
import PostContainer from "@/components/PostContainer";
export default function Page({ params }) {
    const { id } = params;
    return (
        <div className="flex max-w-7xl mx-auto">
            <SideBar />
            <PostContainer id={id} />
        </div>

    )
}