import React from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useAuth } from "../../contexts/AuthContext";
import "./Signin.css";

export default function Signin() {
  const { setEmail,setPassword,signIn,email,password,error,setError,signInWithGoogle,setUser } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
    try{
      await signIn(email,password);
      navigate("/home");
    }catch(err){
      setError(err.message);
    }
  }
  function handleGoogleAuth(){
    signInWithGoogle().then((result)=>{
      setUser(result.user);
      navigate("/home");
    }).catch((err)=>{
      setError(err.message);
    });
  }
  return (
    <div>
      <Card>
        <Card.Title className="text-center">
          <h2>Sign in</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e)=>{
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" className="w-100 mt-4" type="submit">
            Sign in
          </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleAuth}
          />
        </Card.Body>
      </Card>
      <div className="w-100 text-center">
        New User? <Link to="/">Sign up</Link>
      </div>
    </div>
  );
}
