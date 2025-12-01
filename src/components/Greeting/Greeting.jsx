import "./Greeting.css";

export default function Greeting({ greeting_world }) {
  return <h1 className="greeting">{greeting_world}</h1>;
}
