import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import data from '../Data'
const Shop = () => {

  return (
    <div style={{ width: "100%" }}>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <p>DISCOVER OUR TRENDING PRODUCTS</p>
        <h1>NEW ARRIVALS</h1>
      </div>

      <div className="container mt-5">
        <div className="row">
          {
            data.map((item, index) => (
              <SingleCard image={item.image}
                desc={item.desc}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Shop