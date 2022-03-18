import { render } from "react-dom";

const App = () => {
  return <h1>자살하기</h1>;
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
