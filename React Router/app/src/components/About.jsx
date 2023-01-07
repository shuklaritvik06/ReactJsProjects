import React from 'react'
import { Outlet, useParams} from 'react-router-dom';


function About() {
  const { id } = useParams();
  return (
    <div>
      About {id}
      <Outlet />
    </div>
  )
}

export default About