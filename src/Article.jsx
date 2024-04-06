import { useState } from "react";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setShowContent(!showContent)}>{showContent ? "See less" : "Know More"}</button>
      {showContent && <p>{content}</p>}
    </div>
  );
};

export default Article;
