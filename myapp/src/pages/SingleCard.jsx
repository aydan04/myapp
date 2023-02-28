import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const SingleCard = ({ title, image, price, desc, id }) => {
  return (
    <>
      <Col sm={12} md={3}>
        <Card >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title> {title}</Card.Title>
            <Card.Text>
              {desc.substring(0, 96)}...
            </Card.Text>
            <Card.Text>
              {price}$
            </Card.Text>
            <LinkContainer to={`/shop/${id}`}>
              <Button variant="warning">Read More</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SingleCard