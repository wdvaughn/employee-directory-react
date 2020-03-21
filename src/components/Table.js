import React from "react";

function Table(props) {
  return (
    <table class="table">
      <thead onClick={props.sortEmployees}>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => {
          console.log(employee);
          return (
            <tr>
              <td><img src={employee.image} alt="Image" /></td>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dateOfBirth}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;