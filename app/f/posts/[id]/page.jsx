
export default function Page({ params }) {
    const { id } = params;
    return (

        <div className="h-screen bg-white  ">
            <h1 className="text-3xl">
                {id}
            </h1>
        </div>


    )
}