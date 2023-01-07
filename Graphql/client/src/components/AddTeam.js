import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react";

const ADD_TEAM = gql`
  mutation AddTeam($name: String!, $id: String!) {
    addTeams(deptName: $name, deptId: $id) {
      deptName
      deptId
    }
  }
`;

function AddTeam() {
  const [addTeam, { data }] = useMutation(ADD_TEAM);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTeam({
            variables: {
              name: e.target.name.value,
              id: e.target.id.value,
            },
          });
        }}
      >
        <input type="text" name="id" />
        <input type="text" name="name" />
        <button type="submit">Add Team</button>
      </form>
    </>
  );
}

export default AddTeam;
