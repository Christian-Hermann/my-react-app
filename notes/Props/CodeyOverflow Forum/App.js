import React from "react";
import { comments } from "./commentData";

function App() {
  return (
    <div>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </div>
  );
}
