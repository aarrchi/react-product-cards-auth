import React from 'react'
import {Card, Form, Button} from 'react-bootstrap';
const Signin = () => {
  return (
   
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#6699CC' }}>
        <Card style={{width: '550px', height:'450px', padding:'45px' }}>
        <h4 className='mb-4'>SIGN IN</h4>
        <Form>
           
            <Form.Group className='mb-4'>
                <Form.Label >Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter your password'></Form.Control>
            </Form.Group>
            <Button className='mt-3 mb-4' style={{backgroundColor: '#ea4c89', width: '100%', fontSize: '16px', borderColor: 'transparent'}}>Submit</Button>
            
            <a href='/signup'>Don't have an Account? Sign Up</a>
        </Form>
    </Card>
    
    </div>
    )
    
}

export default Signin
