import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };

  return (
    <div className="container">
      <h1>hello count :- {count}</h1>
      <button onClick={increment}>Increment by 1</button>
    </div>
  );
}

export default Counter;
