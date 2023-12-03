import Container from "@/components/Container";
import SideBar from "@/components/SideBar";
export default function Page({ params }) {
    const { board } = params
    return (
        <div className="flex max-w-7xl mx-auto">
            <SideBar />
            <Container board={board} />
        </div>
    )
}