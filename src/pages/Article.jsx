import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return (
    <div className="Article">
      {parseInt(id, 10) === 1 && <h2>게시글 {id}</h2>}
      {parseInt(id, 10) === 2 && (
        <h2 style={{ backgroundColor: "black", color: "white" }}>
          게시글 {id}
        </h2>
      )}
      {parseInt(id, 10) === 3 && (
        <h2 style={{ backgroundColor: "teal", color: "white" }}>게시글 {id}</h2>
      )}
    </div>
  );
};

export default Article;
