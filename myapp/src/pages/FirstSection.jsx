import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const FirstSection = () => {
  return (
    <>
      <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/10/slider-8.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='firstslide'>
            <h1>Creative</h1>
            <h3>FURNITURE DESIGN</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis
              interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/10/slider-13.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/10/slider-9.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className='minisection d-flex'>
        <div className="leftpart d-flex">
          <div className="one mt-5 d-flex"><i class="fa-solid mt-1 fa-truck-moving"></i>
            <p style={{ color: "gray" }}>Free delicery from $ 250</p></div>
          <div className="two mt-5 d-flex"><i class="fa-solid fa-sack-dollar"></i>
            <p style={{ color: "gray" }}>MONEY BACK GUARANTEED</p></div>
          <div className="third mt-5 d-flex"><i class="fa-solid fa-plane-circle-check"></i>
            <p style={{ color: "gray" }}>EXPRESS SHIPPING WORLDWIDE</p></div>
        </div>

        <div className="rightpart d-flex align-items-center ">
          <h4>NEWSLETTER</h4>
          <InputGroup className="mb-2 input">
            <Form.Control style={{ width: "148px" }}
              placeholder="Enter your email..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
          </InputGroup>
        </div>
      </section>
    </>
  )
}

export default FirstSection