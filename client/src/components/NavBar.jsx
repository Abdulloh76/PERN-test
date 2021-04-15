import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';
import { setAuthAction } from '../store/userReducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const signIn = () => {
    dispatch(setAuthAction(true));
  };

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>
          BuyDevice
        </NavLink>
        <Nav className='ml-auto'>
          {user.isAuth ? (
            <>
              <Button
                variant='outline-light'
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Admin Panel
              </Button>
              <Button
                variant='outline-light'
                onClick={() => history.push(LOGIN_ROUTE)}
                className='ml-2'
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant='outline-light' onClick={() => signIn()}>
                Sign Up
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
