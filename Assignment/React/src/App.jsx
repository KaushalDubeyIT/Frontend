import React from "react";
import Task_1_data from "./Module-14) React - Components, State, Props/Components/Task_1_data";
import Task_2 from "./Module-14) React - Components, State, Props/Components/Task_2";
import Props_data from "./Module-14) React - Components, State, Props/Props/Props_data";
import Counter from "./Module-14) React - Components, State, Props/States/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Route_Task1 from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-1/Route_Task1";
import Home_Task1 from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-1/Home_Task1";
import About_Task1 from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-1/About_Task1";
import Route_Task2 from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-2/Route_Task2";
import Home from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-2/Home";
import About from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-2/About";
import Contact from "./Module-16) React -Advance React- Styling , Routing/Routing/Task-2/Contact";
import Inline_css from "./Module-16) React -Advance React- Styling , Routing/Styling/Inline_css";
import Internal_css from "./Module-16) React -Advance React- Styling , Routing/Styling/Internal_css";
import Extrenal_css from "./Module-16) React -Advance React- Styling , Routing/Styling/Extrenal_css";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Task_1_data/> */}
        {/* <Task_2/> */}
        {/* <Props_data/> */}
        {/* <Counter/> */}

        {/*------------- Routing Task-1------------------- */}
        {/* <Route_Task1/> */}
        {/* <Routes>
          <Route path="/" element={<Home_Task1/>} />
          <Route path="/about" element={<About_Task1/>} />
        </Routes>
         */}

        {/*------------------ Routing Task-2------------------- */}
        {/* <Route_Task2/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes> */}
        
        {/*----------------------- Styling------------------------ */}
        {/* <Inline_css/> */}
        {/* <Internal_css/> */}
        {/* <Extrenal_css/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
