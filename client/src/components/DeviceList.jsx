import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
  const device = useSelector((store) => store.device);

  return (
    <Row className='d-flex'>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
