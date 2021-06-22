import React, { useState, useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    title: "Title 1",
    details: "Details 1",
  },
  {
    id: 2,
    title: "Title 2",
    details: "Details 2",
  },
  {
    id: 3,
    title: "Title 3",
    details: "Details 3",
  },
  {
    id: 4,
    title: "Title 4",
    details: "Details 4",
  },
];

export default function App() {
  const [articles] = useState(data);
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();

  const onArticleSelect = (id) => {
    if (id === activeIndex) setActiveIndex(null);
    else setActiveIndex(id);
  };

  useEffect(() => {
    const onBodyClick = (e) => {
      // adds a check: did the event occur in the ref node?
      if (ref.current.contains(e.target)) {
        // if yes, return early
        return;
      }
      setActiveIndex(null);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    // removes the event listener, should articles unmount 🧼
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedArticles = articles.map((article) => {
    const open = article.id === activeIndex;
    return (
      <article
        key={article.id}
        style={{ border: "1px solid gray" }}
        onClick={() => onArticleSelect(article.id)}
        className="article"
      >
        <h2>{article.title}</h2>
        <div> {open ? <p>{article.details}</p> : null} </div>
      </article>
    );
  });

  return (
    <div className="App">
      <div className="header">
        <h1>Hook useRef</h1>
      </div>
      <section ref={ref} className="articles">
        {renderedArticles}
      </section>
    </div>
  );
}
