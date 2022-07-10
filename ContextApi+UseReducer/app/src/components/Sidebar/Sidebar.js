import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AppContext } from "../../context/Context";
import Rating from "../Rating/Rating";
import "./Sidebar.css";

export default function Sidebar() {
  const [rate,setRate] = useState(3);
  const { sortOrder,sortType: {byAsc,byDesc} } = useContext(AppContext);
  return (
    <div className="filters bg-dark text-white">
     <span>
      <h2>Filter Products</h2>
      </span> 
      <span>
      <Form.Check
        type="radio"
        label="Ascending"
        name="check"
        id="check"
        onChange={()=>{
          sortOrder({type:"ASC"})
        }}
        checked={byAsc}
      ></Form.Check>
      </span>
      <span>
      <Form.Check
        type="radio"
        label="Descending"
        name="check"
        id="check"
        onChange={()=>{
          sortOrder({type:"DESC"})
        }}
        checked={byDesc}
      ></Form.Check>
      </span>
      <span>
      <Rating rating={rate} style={{cursor: "pointer"}} onClick={(i)=>setRate(i+1)}></Rating>
      </span>
      <span>
      <Button variant="light" className="clearBtn" onClick={()=>{
        sortOrder({
          type:"CLEAR",
          payload: {
            byAsc: false,
            byDesc: false,
          }
        })
      }}>Clear Filters</Button>
      </span>
    </div>
  );
}
