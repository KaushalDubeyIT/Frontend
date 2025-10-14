import React from "react";
import RegistrationForm from "./Components/RegistrationForm";
import RegistrationTable from "./Components/RegistrationTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-center mb-5 text-danger">Event Registration App</h2>
        <RegistrationForm />
        <RegistrationTable />
      </div>{" "}
    </div>
  );
}

export default App;
