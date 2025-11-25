import React, { useState } from "react";

function createRandomPost() {
  return {
    id: Math.random().toString(36).substring(2, 9),
    title: "Post " + Math.random().toString(36).substring(2, 5),
    content: "This is a random post content.",
  };
}

const ArticleList = React.memo(function ArticleList({
  showArchive,
  setShowArchive,
}) {
  const [post] = useState(() =>
    Array.from({ length: 60000 }, () => createRandomPost())
  );

  return (
    <aside>
      <h2>Articles </h2>
      <button onClick={() => setShowArchive(!showArchive)}>
        {showArchive ? "Hide" : "Show"} Archive
      </button>
      {showArchive && (
        <ul>
          {post.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [showArchive, setShowArchive] = useState(false);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ArticleList
          setShowArchive={setShowArchive}
          showArchive={showArchive}
        />
      </div>
    </>
  );
}

export default App;
