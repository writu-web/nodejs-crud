export default async function Blog() {
    const res=await fetch("http://localhost:3000/api/blog");
    const data=await res.json();
  return (
    <div className="container">
           <h2>This is blog</h2>
            {data.map((post: { id: number; title: string; body: string }) => (
                <div key={post.id} className="bg-white shadow-2xs p-2">
                <h3>{post.title}</h3> 
                    <p>{post.body}</p> 
                </div>
                ))
            }
    </div>
  );
}
