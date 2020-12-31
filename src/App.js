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
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    console.log(meaning);
  }
  return (
    <div className="App">
      <h1>🙂 Emoticons 🙃</h1>
      <input
        placeholder="Enter Something to know the meaning of"
        onChange={emojiInputHandler}
      ></input>
    </div>
  );
}
