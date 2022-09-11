import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "News";
    async function getArticle() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const data = await response.data;

      console.info(data);
      setLoading(false);
      setArticle(data);
    }
    getArticle();
  }, []);

  return (
    <section>
      <h1>Data</h1>
      <p>Data Copit</p>

      {loading && <i>Loading Article...</i>}
      {!loading && (
        <div>
          {article.map(function (data, index) {
            return (
              <article key={data.id}>
                <div className="artic">
                  <h2>
                    <Link className="links" to={`/blog/${data.id}`}>
                      {index + 1}. {data.title}
                    </Link>
                  </h2>
                  <time>
                    Published: {new Date(data.publishedAt).toLocaleDateString()}
                  </time>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
export default Blog;
