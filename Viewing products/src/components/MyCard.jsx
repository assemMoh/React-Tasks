import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export function MyCard(props) {

  let  nav = useNavigate()
  let { carObject } = props
  let discover = () => {
    nav(`/${carObject.id}`)
  }
  
  
  return (
    <div className='col-sm-6 col-md-4 myCard'>
        <Card>
            <Card.Img variant="top" src={carObject.src}/>
            <Card.Body>
                <Card.Title>{carObject.name}</Card.Title>
                <Card.Text className='card-txt'>
                  {carObject.description}
                </Card.Text>
                <Card.Text>
                  Type: {carObject.type}
                </Card.Text>
                <Card.Text>
                  Price: {carObject.price}
                </Card.Text>
                <Button onClick={discover} className='btn btn-dark'>Discover Car</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
