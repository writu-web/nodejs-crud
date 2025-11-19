'use client';
import { useState } from "react";
import BlogEdit from "./blogEdit";

export default function BlogEditToggle({ selectedBlog: { id, title, body, blogger } }: { selectedBlog: { id: string; title: string; body: string; blogger: string } }) {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div>
            {showEdit && <BlogEdit id={id} title={title} body={body} blogger={blogger} />}
            <button onClick={() => setShowEdit(!showEdit)} className="bg-black pl-3 pr-3 cursor-pointer rounded-sm ml-2 text-white hover:bg-blue-500 transition-all">{showEdit ? 'close' : 'Edit'}</button>
            <button className="bg-black pl-3 pr-3 cursor-pointer rounded-sm ml-2 text-white hover:bg-blue-500 transition-all">Delete</button>
        </div>
    )
}