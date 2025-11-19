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

  useEffect(() => {
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

// Separate Hooks for Separate Effects
import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get("/menu").then((response) => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get("/news-feed").then((response) => {
      setNewsFeed(response.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get("/friends").then((response) => {
      setFriends(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>My Network</h1>
      {!menu ? (
        <p>Loading..</p>
      ) : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className="content">
        {!newsFeed ? (
          <p>Loading..</p>
        ) : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt="" />
              </article>
            ))}
          </section>
        )}
        {!friends ? (
          <p>Loading..</p>
        ) : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? "online" : "offline"}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}


