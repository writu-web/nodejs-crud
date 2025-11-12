import Nav from "./nav";

export default function HeaderBar() {
    return (
        <div className="bg-gray-200 p-2 flex items-center justify-between">
        <h1 className="text-4xl font-bold mb-4">Todo List</h1>
        <Nav />
        </div>
    )
}