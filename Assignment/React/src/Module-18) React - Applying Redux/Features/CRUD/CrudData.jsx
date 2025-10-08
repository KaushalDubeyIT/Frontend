import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  updateItem,
  clearAll,
} from "../CRUD/crudSlice";

function CrudApp() {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const crudList = useSelector((state) => state.crud.list);
  const dispatch = useDispatch();

  const handleAddOrUpdate = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      dispatch(updateItem({ index: editIndex, newValue: input }));
      setEditIndex(null);
    } else {
      dispatch(addItem(input));
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(crudList[index]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Simple CRUD App</h1>

      <input
        type="text"
        placeholder="Enter something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <button onClick={() => dispatch(clearAll())}>Clear All</button>

      <ul>
        {crudList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleEdit(index)}> Edit</button>{" "}
            <button onClick={() => dispatch(deleteItem(index))}>
               Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
