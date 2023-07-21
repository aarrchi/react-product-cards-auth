import React from 'react'
import {Card, Form, Button} from 'react-bootstrap';

const Signup = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#6699CC' }}>
    <Card style={{width: '550px', height:'520px', padding:'45px' }} >
        <h4 className='mb-4'>SIGN UP</h4>
        <Form>
            <Form.Group className='mb-4 mt-2'>
                <Form.Label className='form-label'>Full Name</Form.Label>
                <Form.Control type ='text' placeholder='Enter your full Name'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter your password'></Form.Control>
            </Form.Group>
            <Button className='mt-2 mb-3' style={{backgroundColor: '#ea4c89', width: '100%', fontSize: '16px', borderColor: 'transparent'}}>Submit</Button>
            
            <a href='/signin'>Already have an Account? Sign In</a>
        </Form>
    </Card>
    </div>
  )
}

export default Signup
