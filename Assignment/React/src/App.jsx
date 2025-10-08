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
import Usestate from "./Lists , Hooks , Localstorage , Api Project/Hooks/Usestate";
import Useeffect from "./Lists , Hooks , Localstorage , Api Project/Hooks/Useeffect";
import Useref from "./Lists , Hooks , Localstorage , Api Project/Hooks/Useref";
import Que_1 from "./React – Json-Server And Firebase Real Time Database/Task-1/Que_1";
import Que_2 from "./React – Json-Server And Firebase Real Time Database/Task-1/Que_2";
import CounterData from "./Module-18) React - Applying Redux/Features/Counter/CounterData";
import TodoData from "./Module-18) React - Applying Redux/Features/Todo/TodoData";
import CrudData from "./Module-18) React - Applying Redux/Features/CRUD/CrudData";

function App() {
  return (
    <div>
      <h1>This is App data</h1>
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

        {/*--------------------------- Hooks------------------------------- */}
        {/* <Usestate/> */}
        {/* <Useeffect/> */}
        {/* <Useref/>   */}

        {/*--------- Json-server & Firebase RealTime Database-------------- */}
        {/* <Que_1/> */}
        {/* <Que_2/> */}

        {/* -----------------------React-Redux------------------------------ */}
        {/* <CounterData/> */}
        {/* <TodoData/> */}
        {/* <CrudData /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
