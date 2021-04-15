import React, { useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CreateDevice = ({ show, onHide }) => {
  const device = useSelector((state) => state.device);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', id: Date.now() }]);
  };
  const removeInfo = (id) => {
    setInfo(info.filter(i => i.id !== id));
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className='mt-3'
            placeholder='Enter device name'
          ></Form.Control>
          <Form.Control
            className='mt-3'
            type='number'
            placeholder='Enter device price'
          ></Form.Control>
          <Form.Control
            className='mt-3'
            type='file'
            placeholder='Enter device price'
          ></Form.Control>
          <hr />

          <Button variant='outline-dark' onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row className='mt-3' key={i.id}>
              <Col md={4}>
                <Form.Control placeholder='Property name' />
              </Col>
              <Col md={4}>
                <Form.Control placeholder='Property description' />
              </Col>
              <Col md={4}>
                <Button variant='outline-dark' onClick={() => removeInfo(i.id)}>Delete</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Close
        </Button>
        <Button variant='outline-success' onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
