'use client';

import React from "react";
import { useState } from "react";

type AddBlogProps = {
    submitBlog: (e: React.FormEvent,title:string, body:string) => void;
};

export default function AddBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
     const submitBlog = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
            console.log('value',{ title, body });
        }
    return (
        <div className="container">
            <h2>Add a new blog post</h2>
            <form onSubmit={submitBlog}>
                <input type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} className="border p-2 w-full mb-4"/>
                <textarea placeholder="Body" onChange={e=>setBody(e.target.value)} className="border p-2 w-full mb-4"></textarea>
                <button type="submit"  className="bg-blue-500 text-white p-2">Add Blog</button>
            </form>
        </div>
        )
}