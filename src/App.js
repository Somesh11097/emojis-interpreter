import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😅": " Grinning Face with Sweat",
  "😂": "LOL",
  "🤑": "Rich",
  "🥵": "Overheated Face"
};

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have it in our database";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>🙂 Emoticons 🙃</h1>
      <input
        placeholder="Enter Something to know the meaning of"
        onChange={emojiInputHandler}
      ></input>
      <h2> {meaning} </h2>
    </div>
  );
}
