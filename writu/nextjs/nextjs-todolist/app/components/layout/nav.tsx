"use client";

import Link from "next/link";

export default function Nav() {
  return (
      <ul className="flex p-2">
        <li>
          <Link className="p-2 text-black hover:text-blue-500 transition-colors" href="/">Home</Link>
        </li>
        <li>
          <Link className="p-2 text-black hover:text-blue-500 transition-colors" href="/about">About</Link>
        </li>
        <li>
          <Link className="p-2 text-black hover:text-blue-500 transition-colors" href="/blog">Blog</Link>
        </li>
      </ul>
  )
}
 
   
