import React from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Home() {
  const {signOutUser,setError,error,user}= useAuth();
  const navigate = useNavigate();  
  async function handleClick(){
     try{
        await signOutUser();
        document.cookie = `user=""; expires=Sat, 16 Jul 2022 00:00:00 GMT;`;
        navigate("/login");
     }catch(err){
        setError(err.message);
     }
  }  
  return (
    <div>
        <Card className='d-flex justify-content-center align-items-center'>
            <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Card.Title>Home</Card.Title>
                <Card.Text>Welcome to the home page</Card.Text>
                <Card.Text>Name: {user?.displayName!==null? user?.displayName:"User"}</Card.Text>
                <Card.Text>Email: {user?.email}</Card.Text>
                <Button variant="warning" onClick={handleClick}>Logout</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
