import { React, useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (text.length > 0) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
      setText("");
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
