// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );
        if (!response.ok) {
          return setNotFound(true);
        }
        const data = await response.json();
        setArticle(data);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );
  if (notFound) {
    return <h1>Halaman Tidak Ditemukan</h1>;
  }
  return (
    <div>
      {loading ? (
        <i>Loading Article...</i>
      ) : (
        <article>
          <h1>{article.title}</h1>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <p>{article.summary}</p>
          <p>
            Source:{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
          <img src={article.imageUrl} alt={article.title} />
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
