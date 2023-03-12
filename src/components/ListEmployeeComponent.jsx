import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListEmployeeComponent = ({ props }) => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/employees")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  const addEmployee = () => {};
  const editEmployee = (id) => {
    // console.log(id);
    navigate(`/update-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/employees/${id}`)
      .then((response) => {
        // console.log(response.data);
        setEmployees(employees.filter((employee) => employee.id != id));
      });
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  return (
    <div>
      <h2 className=" text-center">Employee List</h2>
      <div className="row">
        <Link to="add-employee">
          <button className="btn btn-primary" onClick={addEmployee}>
            Add Employee
          </button>
        </Link>
      </div>
      <div className="row">
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName} </td>
                <td>{employee.emailId} </td>
                <td>
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className="btn btn-info"
                    style={{ margin: "5px" }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-danger"
                    style={{ margin: "5px" }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => viewEmployee(employee.id)}
                    className="btn btn-success"
                    style={{ margin: "5px" }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
