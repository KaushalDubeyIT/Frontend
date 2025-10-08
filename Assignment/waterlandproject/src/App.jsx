import React from "react";
import Header from "./Website/Comman/Header";
import Home from "./Website/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Blog from "./Website/Pages/Blog";
import Contact from "./Website/Pages/Contact";
import Feature from "./Website/Pages/Feature";
import Gallery from "./Website/Pages/Gallery";
import Attraction from "./Website/Pages/Attraction";
import Package from "./Website/Pages/Package";
import Error from "./Website/Pages/Error";
import Testimonial from "./Website/Pages/Testimonial";
import Team from "./Website/Pages/Team";
import Dashboard from "./Admin/Apages/Dashboard";
import Ablogs from "./Admin/Apages/Ablogs";
import Ateam from "./Admin/Apages/Ateam";
import Addblog from "./Admin/Apages/Addblog";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* All pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attraction" element={<Attraction />} />
          <Route path="/package" element={<Package />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/team" element={<Team />} />

          {/* Error page  */}
          <Route path="*" element={<Error />} />

          {/* Admin routes */}
          <Route path="/dash" element={<Dashboard/>} />
          <Route path="/ablogs" element={<Ablogs/>} />
          <Route path="/ateam" element={<Ateam/>} />
          <Route path="/addblog" element={<Addblog/>} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
