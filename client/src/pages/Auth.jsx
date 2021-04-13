import React from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation()
  const isLogIn = location.pathname === LOGIN_ROUTE

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card className='p-5'>
        <h2 className='m-auto'>{isLogIn ? 'Authorization' : 'Registration' }</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-3' placeholder='Enter your email ...' />
          <Form.Control className='mt-3' placeholder='Enter your password ...' />
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            <div className='pt-2'>
              {
                isLogIn ? (
                  <>
                    Don't have account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                  </>
                ) : (
                  <>
                    Have account? <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                  </>
                )
              }
            </div>
            <Button variant='outline-success'>{isLogIn ? 'Sign In' : 'Sign Up'}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
