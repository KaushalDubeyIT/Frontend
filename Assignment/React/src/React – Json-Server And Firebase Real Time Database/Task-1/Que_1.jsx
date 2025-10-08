import React, { useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useState } from "react";


// Q-1) Create a React component that fetches data from a public API (e.g., a list of users)and displays it in a table format.


function Que_1() {
  const [data, setdata] = useState([]);
  // console.log(data)

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data)
    setdata(res.data);
  };

  return (
    <div>
      <MDBTable className="mt-5">
        <MDBTableHead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">city</th>
            <th scope="col">website</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data &&
            data.map((data, index) => {
              console.log(data);
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address.city}</td>
                  <td>{data.website}</td>
                </tr>
              );
            })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Que_1;
