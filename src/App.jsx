// import clsx from "clsx";
import { useState, useEffect } from "react";
import { getData } from "./api/data";

import sourceImg from "./images/pattern-divider-desktop.svg";
import dividerImg from "./images/pattern-divider-mobile.svg";
import iconDiceImg from "./images/icon-dice.svg";

function App() {
  const [link, setLink] = useState([]);
  const handleClick = async () => {
    const data = await getData();
    setLink(data);
  };

  return (
    <div className="advice-container">
      <p id="advice-title">
        Advice #<span id="advice-id"></span>
      </p>
      <p id="advice-text">{link.slip.advice}</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={sourceImg} />
        <img id="pattern-divider" src={dividerImg} alt="divider" />
      </picture>
      <button id="generate-btn" onClick={handleClick}>
        <img src={iconDiceImg} alt="icon-dice"></img>
      </button>
    </div>
  );
}

export default App;
