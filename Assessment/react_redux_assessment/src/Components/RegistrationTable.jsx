import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteRegistration,
  updateRegistration,
} from "../Features/registrationSlice";

export default function RegistrationTable() {
  const data = useSelector((state) => state.registration.data);
  const dispatch = useDispatch();

  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteRegistration(id));
  };

  const handleEdit = (item) => {
    setEditData(item);
  };

  const handleSave = () => {
    dispatch(updateRegistration(editData));
    setEditData(null);
  };

  return (
    <div className="mt-5">
      <h4 className="text-center mb-4">Registered Participants</h4>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle text-center shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Session</th>
              <th>Attendance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>
                    {editData?.id === item.id ? (
                      <input
                        className="form-control"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {editData?.id === item.id ? (
                      <input
                        className="form-control"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {editData?.id === item.id ? (
                      <input
                        className="form-control"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                      />
                    ) : (
                      item.phone
                    )}
                  </td>
                  <td>{item.session}</td>
                  <td>{item.attendance}</td>
                  <td>
                    {editData?.id === item.id ? (
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-muted py-3">
                  No registrations yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
