import React, { useState } from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/constants';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userApi';
import { useDispatch } from 'react-redux';
import { setAuthAction, setUserAction } from '../store/userReducer';

const Auth = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory()
  const isLogIn = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogIn) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      dispatch(setUserAction(data));
      history.push(SHOP_ROUTE)
      dispatch(setAuthAction(true));
    } catch(e) {
      alert(e.response.data.message)
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card className='p-5'>
        <h2 className='m-auto'>{isLogIn ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Enter your email ...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Enter your password ...'
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            <div className='pt-2'>
              {isLogIn ? (
                <>
                  Don't have account?{' '}
                  <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                </>
              ) : (
                <>
                  Have account? <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                </>
              )}
            </div>
            <Button variant='outline-success' onClick={click}>
              {isLogIn ? 'Sign In' : 'Sign Up'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
