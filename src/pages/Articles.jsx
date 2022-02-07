import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div className="Articles">
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = (props) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${props.id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {props.id}
      </NavLink>
    </li>
  );
};

export default Articles;
