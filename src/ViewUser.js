import React from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
    const params = useParams()
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Id:{params.id}</h1>
        <div className="col-6">
            Username:Person 1
        </div>
        <div className="col-6">
            Email:Person 1
        </div>
        <div className="col-6">
            Country:Person 1
        </div>
        <div className="col-6">
            State:Person 1
        </div>
        <div className="col-6">
            City:Person 1
        </div>
        <div className="col-6">
            Phone:Person 1
        </div>
        <div className="col-6">
            DOB:Person 1
        </div>
        <div className="col-6">
            Gender:Person 1
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
