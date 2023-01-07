import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
const GET_EMPLOYEE = (id) =>
  gql`
    query {
      employee(deptId: "${id}") {
        name
        deptId
        salary
      }
    }
  `;
function GetAEmployee() {
  const [id, setId] = useState("1");
  const { data } = useQuery(GET_EMPLOYEE(id));
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>GetAEmployee</div>
      <input type="text" onChange={(e)=>setId(e.target.value)} />
      <button>Get Employee</button>
    </>
  );
}

export default GetAEmployee;
