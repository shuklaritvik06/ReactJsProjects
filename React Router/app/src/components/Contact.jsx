import React from 'react'
import { useNavigate} from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  return (
    <div>Contact
      <button onClick={()=>navigate("/")}>Click to go to Home</button>
    </div>
  )
}

export default Contact