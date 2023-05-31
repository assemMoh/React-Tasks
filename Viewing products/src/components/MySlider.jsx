import React from 'react'
import { Carousel } from 'react-bootstrap'

export function MySlider() {
  return (
    <div>
        <h3 className='text-center p-1'>Here, you will find your car</h3>
        <div className="w-75 m-auto p-3 MySlider">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="audi.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="lambo.webp"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="bugatti.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}
