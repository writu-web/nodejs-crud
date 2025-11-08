export default async function Blog() {
    const res=await fetch("http://localhost:3000/api/blog");
    const data=await res.json();
  return (
    <div>
        <main>      
            <p>This is blog</p>
            {data.map((post: { id: number; title: string; body: string }) => (
                <div key={post.id}>
                <h2>{post.title}</h2> 
                    <p>{post.body}</p> 
                </div>
                ))
            }
        </main>
    </div>
  );
}
