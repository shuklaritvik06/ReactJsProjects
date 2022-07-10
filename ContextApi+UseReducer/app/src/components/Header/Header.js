import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDebounce } from "use-debounce"; 


export default function Header() {
  const { state, setTotal,total,dispatch,sortOrder } = useContext(AppContext);
  useEffect(()=>{
    setTotal(
      state.cart.reduce((acc, curr) => {
        return acc + curr.price*curr.qty;
      }, 0)
    )
  },[state.cart])
  return (
    <>
      <Navbar bg="light" expand="lg" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="/">Product Hub</Navbar.Brand>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="me-5"
                onChange={(e)=>{
                  sortOrder({
                    type:"SEARCH",
                    payload:{
                      search: e.target.value,
                      byAsc: false,
                      byDesc: false,
                    }
                  })
                }}
              />
            </Form>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="success">{state.cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: "370px" }}>
                {state.cart.length > 0 ? (
                  state.cart.map((item) => {
                    return (
                      <Dropdown.Item className="d-flex justify-content-between align-items-center" key={item.id}>
                        <img
                          src={item.image}
                          alt={item.id}
                          style={{ width: "20%", borderRadius: "50%" }}
                        />
                        {item.title}
                        <span className="">
                          <AiFillDelete fontSize="20px"
                            onClick={()=>{
                              dispatch({type:"REMOVE_FROM_CART",payload:item})
                            }}
                          ></AiFillDelete>
                        </span>
                      </Dropdown.Item>
                    );
                  })
                ) : (
                  <span style={{ padding: "10px" }}>Cart is Empty!</span>
                )}
                <Dropdown.Item>
                  Price: $ {
                    total
                  }
                </Dropdown.Item>
                <Link to="/cart" className="p-3">
                  <Button variant="success">Check Cart</Button>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
