import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [typeVisible, setTypeVisisble] = useState(false)
  const [brandVisible, setBrandVisisble] = useState(false)
  const [deviceVisible, setDeviceVisisble] = useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button variant='outline-dark' onClick={() => setTypeVisisble(true)} className='mt-4 p-2'>Add type</Button>
      <Button variant='outline-dark' onClick={() => setBrandVisisble(true)} className='mt-4 p-2'>Add brand</Button>
      <Button variant='outline-dark' onClick={() => setDeviceVisisble(true)} className='mt-4 p-2'>Add device</Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisisble(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisisble(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisisble(false)} />
    </Container>
  )
}

export default Admin;
