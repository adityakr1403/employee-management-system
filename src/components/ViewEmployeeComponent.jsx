import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/employees/" + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setEmployee({
          firstName: result.firstName,
          lastName: result.lastName,
          emailId: result.emailId,
        });
      });
  }, []);

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label> First Name : </label>
            <div>{employee.firstName}</div>
          </div>
          <div className="row">
            <label> Last Name : </label>
            <div>{employee.lastName}</div>
          </div>
          <div className="row">
            <label> Email Id : </label>
            <div>{employee.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
