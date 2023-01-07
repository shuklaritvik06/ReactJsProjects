import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react";

const ADD_EMPLOYEE = gql`
  mutation AddEmployee($name: String!, $id: String!, $salary: Int!) {
    addEmployee(name: $name, deptId: $id, salary: $salary) {
      name
      deptId
      salary
    }
  }
`;

function AddEmployee() {
  const [addEmployee, { data }] = useMutation(ADD_EMPLOYEE);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        addEmployee({
          variables: {
            name: e.target.name.value,
            id: e.target.id.value,
            salary: parseInt(e.target.salary.value),
          },
        });
      }}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="id" placeholder="id"/>
        <input type="number" name="salary"  placeholder="salary"/>
        <button type="submit">Add Employee</button>
      </form>
    </>
  );
}

export default AddEmployee;
