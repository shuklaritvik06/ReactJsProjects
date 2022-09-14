import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AppContext } from "../../context/Context";

export default function SingleProduct({item}) {
  const {
    state: {cart},
    dispatch
  } = useContext(AppContext);
  return (
    <div className="products" style={{width: "20%",height: "20%"}}>
      <Card style={{width: "300px"}}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <div className="d-flex" style={{justifyContent:"space-between"}}>
            {
                cart.some(p=>p.id === item.id) ? (
                    <Button variant="danger" onClick={
                        ()=>{
                            dispatch({type:"REMOVE_FROM_CART",payload:item})
                        }
                    }>
                    Remove from cart
                </Button>
                ): (
                    <Button variant="success" onClick={
                        ()=>{
                            dispatch({type:"ADD_TO_CART",payload:item})
                        }
                    }>
                    Add to Cart
                </Button>
                )
            }
            <p>$ {item.price}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
