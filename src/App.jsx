import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import HamburgerButton from "./components/HamburgerButton/HamburgerButton";

function App() {
  return (
    <>
      <HamburgerButton />
      <hr />
      <Greeting greeting_world={"NAMASTE WORLD"} /> <hr />
    </>
  );
}

export default App;
