import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

function Props({ name, location, age }) {
  return (
    <div className="col-md-3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>Name : {name} </MDBCardText>
          <MDBCardText>Age : {age} </MDBCardText>
          <MDBCardText>Location : {location} </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Props;
