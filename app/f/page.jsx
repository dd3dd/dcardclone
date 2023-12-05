import Container from "@/components/Container";
import SideBar from "@/components/SideBar";

export default function Page() {
    return (
        <div className="flex max-w-7xl mx-auto">
            <SideBar />
            <Container />
        </div>
    )
}