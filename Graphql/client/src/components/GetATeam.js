import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
const GET_TEAM = (id) =>
  gql`
    query {
      team(deptId:"${id}"){
        deptId,
        deptName
      }
    }
  `;

function GetATeam() {
  const [id, setId] = useState("1");
  const { data } = useQuery(GET_TEAM(id));
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>GetATeam</div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button>Get Team</button>
    </>
  );
}

export default GetATeam;
