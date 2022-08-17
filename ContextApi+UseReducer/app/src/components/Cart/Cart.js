import React, { useContext } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { AppContext } from "../../context/Context";

export default function Cart() {
  const { state, total,dispatch } = useContext(AppContext);
  return (
    <div>
    <ListGroup>
      {state.cart.length > 0 ? (
        <>
          {state.cart.map((item, index) => {
            return (
                <ListGroup.Item key={item.id}>
                  <img
                    src={item.image}
                    alt={item.id}
                    style={{ width: "20%", borderRadius: "50%" }}
                  />
                  <span>{item.title}</span>
                  <span>
                    <Form.Select onChange={(e)=>{
                      dispatch({type:"INCREMENT_QTY",payload:{...item,qty:Number(e.target.value)}})
                    }}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </Form.Select>
                  </span>
                </ListGroup.Item>
            );
          })}
          <Button variant="primary">Checkout {total}</Button>
        </>
      ) : (
        <span>No items in cart</span>
      )}
      </ListGroup>
    </div>
  );
}
