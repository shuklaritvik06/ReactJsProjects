import React from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


export default function Signup() {
  const navigate = useNavigate();
  const { setEmail,setPassword,signUp,email,password,error,setError,confirmPass,setConfirmPass } = useAuth();
  async function handleSubmit(e){
    e.preventDefault();
    if(password !== confirmPass){
      setError("Passwords do not match");
      return;
    }else{
      setError("");
    }
    try{
        await signUp(email,password);
        navigate("/login");
    }catch(err){
        setError(err.message);
    }
  }  
  return (
    <div>
      <Card>
        <Card.Title className="text-center"><h2>Sign up</h2></Card.Title>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}  
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
                    setEmail(e.target.value);
              }}/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password"  onChange={(e)=>{
                    setPassword(e.target.value);
              }}/>
            </Form.Group>
            <Form.Group id="passwordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" onChange={(e)=>{
                    setConfirmPass(e.target.value);
              }}/>
            </Form.Group>
            <Button variant="primary" className="w-100 mt-4" type="submit">Sign up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center">
        Already have a account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
}
