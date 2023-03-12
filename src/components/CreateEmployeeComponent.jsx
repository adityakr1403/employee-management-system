import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailIdNameHandler = (event) => {
    setEmailId(event.target.value);
  };

  const saveEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    createEmployee(employee);
    // console.log(JSON.stringify(employee));
  };
  //   const cancel = (event) => {
  //     event.preventDefault();
  //     setFirstName("");
  //     setLastName("");
  //     setEmailId("");
  //   };

  const createEmployee = (employee) => {
    axios
      .post("http://localhost:8080/api/v1/employees", employee)
      .then((response) => {
        navigate("/");
      });
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="">First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                    name="firstName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                    name="lastName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email Id:</label>
                  <input
                    type="text"
                    placeholder="Email Id Name"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailIdNameHandler}
                    name="email"
                  />
                </div>
                <button className="btn btn-success" onClick={saveEmployee}>
                  Save
                </button>
                <Link
                  className="btn btn-danger"
                  to="/"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
