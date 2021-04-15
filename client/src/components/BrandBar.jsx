import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBrandAction } from '../store/deviceReducer';

const BrandBar = () => {
  const dispatch = useDispatch();
  const device = useSelector((store) => store.device);

  return (
    <Row className='d-flex'>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: 'pointer' }}
          key={brand.id}
          className='p-3'
          onClick={() => dispatch(setSelectedBrandAction(brand))}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
};

export default BrandBar;
