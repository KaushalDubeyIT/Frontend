import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRegistration } from "../Features/registrationSlice";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    session: "",
    attendance: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.phone) {
      dispatch(addRegistration({ ...form, id: Date.now() }));
      setForm({
        id: "",
        name: "",
        email: "",
        phone: "",
        session: "",
        attendance: "",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <h4 className="text-center mb-4">Event Registration Form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Session</label>
            <input
              className="form-control"
              name="session"
              placeholder="Enter session name"
              value={form.session}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Attendance Type</label>
            <select
              className="form-select"
              name="attendance"
              value={form.attendance}
              onChange={handleChange}
              required
            >
              <option value="">Select Attendance</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Registration
          </button>
        </form>
      </div>
    </div>
  );
}
