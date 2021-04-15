import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Card, Image } from 'react-bootstrap';
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = ({device}) => {
  const history = useHistory()
  return (
    <Col md={3} className='mt-3' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border='light'>
        <Image src={device.img} width={150} height={150} />
        <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
          <div>Samsung...</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
