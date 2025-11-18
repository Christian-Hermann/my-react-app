// Function Component Effects
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count: ${count}`);
  });
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Clean Up Effects
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    return () => {
      document.removeEventListener('mousedown', increment)
    }
  });

  return <h1>Document Clicks: {clickCount}</h1>;
}

// Control When Effects are Called
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect((effect, []) => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

const handleChange = ({target}) => {
  setName(target.value)
}

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}
