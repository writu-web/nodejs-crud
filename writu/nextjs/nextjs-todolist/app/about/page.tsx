export default async function About() {
  const res = await fetch("http://localhost:3000/api/about");
  const data = await res.json();
  return (
    <div>
      <main>       
        <p>
          {data.message}
        </p>
      </main>
    </div>
  );
}
