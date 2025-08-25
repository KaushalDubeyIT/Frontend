import React, { useRef } from "react";
import Header from "../../Header";

function Useref() {
  const refelemet = useRef();

  const ondata = () => {
    refelemet.current.focus();
  };

  const datachange = () => {
    refelemet.current.style.color = "white";
    refelemet.current.style.background = "gray";
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <input type="text" ref={refelemet} placeholder="Enter name" />
        <div>
          <button className="me-5 mt-5" onClick={ondata}>
            Click
          </button>
          <button onClick={datachange}>Change color</button>
        </div>
      </div>
    </div>
  );
}

export default Useref;
