import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTypeAction } from '../store/deviceReducer';

const TypeBar = () => {
  const dispatch = useDispatch();
  const device = useSelector((store) => store.device);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          onClick={() => dispatch(setSelectedTypeAction(type))}
          active={type.id === device.selectedType.id}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
