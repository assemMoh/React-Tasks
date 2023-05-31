import React from 'react'
import { carsList } from '../models/cars'
import { useParams } from 'react-router-dom'
import { Container, Image, Navbar } from 'react-bootstrap';
import { MyNavigation } from './MyNavigation';
// import {x} from '../images/amg.jpg'

export function ViewCar() {

  let {id} = useParams();
  let item = carsList[id - 1]
  console.log(item.src)

  let planB = (e) => {
    e.target.src = 'amg.jpg'
  }


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/viewCars">
            <button className='btn btn-outline-light'>Back to products</button>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className='viewCar bg-light'>
              <img 
              src={item.src}
               alt='show me'
              />
          <div className=' details'>
            <h4>
              Name: 
              <label className='info'>
                {item.name}
              </label>
            </h4>
            <h4>
              Type:  
              <label className='info'>
                {item.type}
              </label>
            </h4>
            <h4>
              Price: 
              <label className='info'>
                {item.price}
              </label>
            </h4>
            <h4>
              Description:
              <label className='info'>
                {item.description}
              </label>
            </h4>
            <button className='btn btn-success w-25'>Buy</button>
          </div>
      </div>
    </div>
  )
}
