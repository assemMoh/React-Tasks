import { isDisabled } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

export function ViewInfo() {

  let { id } = useParams()
  let nav = useNavigate()
  let [formValues, setFormValues] = useState({
    name: "",
    type: "",
    price: "",
    description: ""
  })


  let updateValues = (e) => {
    setFormValues({
      ...formValues, 
      [e.target.name]: e.target.value
    })
  }

  let done = (e) => {
    e.preventDefault()

    if (id == 0)
      axios.post('http://localhost:3001/cars', formValues).then(() => {
        nav('/cars')
      })
    else
      axios.put(`http://localhost:3001/cars/${id}`, formValues).then(() => {
        nav('/cars')
      })
    

    console.log(formValues)
  }


  let retreiveCar = async () => {
    try{
      let car = await axios(`http://localhost:3001/cars/${id}`)
      setFormValues(car.data)
    }catch(e)
    {
      console.log(e)
    }
  }


  useEffect(() => {
   if (id != 0)
   {
    retreiveCar()
   }

  }, [])
  


  return (
    <div className='container bg-light p-3'>
      <Form onSubmit={done}>
      <Form.Group className="mb-3" >
        <Form.Label>
        Name
        {id != 0 ? 
        <i className="text-warning mx-2 bi bi-pencil-square"></i>
        : "" }
        </Form.Label>
        <Form.Control 
        type="text" 
        name="name"
        placeholder="Enter car name..."
        onChange={updateValues}
        defaultValue={formValues.name} 

        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
        Type
        {id != 0 ? 
        <i className="text-warning mx-2 bi bi-pencil-square"></i>
        : "" }
        </Form.Label>
        <Form.Control 
        type="text"
        name="type" 
        placeholder="Enter car type..."
        onChange={updateValues}
        defaultValue={formValues.type} 

        />
      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>
        Price
        {id != 0 ? 
        <i className="text-warning mx-2 bi bi-pencil-square"></i>
        : "" }
        </Form.Label>
        <Form.Control 
        type="number" 
        name="price"
        placeholder="Enter car price..."
        onChange={updateValues}
        defaultValue={formValues.price} 

        />
      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>
        Description
        {id != 0 ? 
        <i className="text-warning mx-2 bi bi-pencil-square"></i>
        : "" }
        </Form.Label>
        <Form.Control 
        type="text" 
        name="description"
        placeholder="Enter car description..."
        onChange={updateValues}
        defaultValue={formValues.description} 

        />
      </Form.Group>
     

     
      <Button variant="dark" type="submit">
        {id == 0 ? "Add car" : "Edit Car"}
      </Button>
    </Form>
    </div>
  )
}
