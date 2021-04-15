import React from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = { id: 1, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' }
  const description = [
    { id: 1, title: 'CPU', description: 'Snapdragon 625' },
    { id: 2, title: 'RAM', description: '4Gb' },
    { id: 3, title: 'Storage', description: '64Gb' },
    { id: 4, title: 'Camera', description: '24Mpx' },
    { id: 5, title: 'Accumulator', description: '4000' },
  ]
  return (
    <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} $</h3>
                        <Button variant={"outline-dark"}>Add to Basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Specifications</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
  )
}

export default DevicePage;
