import "./HamburgerButton.css";
import { useState } from "react";
const HamburgerButton = () => {
  //state to know if the hamburger menu is shown or not shown.
  const [shown, setShown] = useState(false);

  function handleClick() {
    setShown((prev) => !prev);
    console.log(`before click the button was in ${shown} condition`);
  }
  return (
    <div id="hamburger-container1">
      <button
        id="hamburger-container2"
        className={shown === true ? "hamburger-active" : "hamburger-notActive"}
        onClick={handleClick}
        aria-label="Toggle Menu"
        style={{ background: "none", border: "none", padding: 0 }} // Clean up button defaults
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};
export default HamburgerButton;
