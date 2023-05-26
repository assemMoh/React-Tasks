import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function ViewSpecs() {


    let [car, setCar] = useState({})
    let nav = useNavigate()

    let { id } = useParams()
    console.log(id)


    let getCarInfo = async () => {
        try{
            let car = await axios.get(`http://localhost:3001/cars/${id}`)
            setCar(car.data)
        }catch(e){
            console.log(e)
        }
    }

    let back = () => {
        nav('/cars')
    }
    


    useEffect(() => {
        getCarInfo()
    },[])

  return (
    <div className='container-fluid bg-secondary  p-3'>
        <div className='w-100 p-1' style={{borderBottom: '0px solid black'}}>
            <button onClick={back} className='btn btn-outline-dark'>Back to all cars</button>
        </div>
        <div className='p-3'>
            <h4>Name:</h4>
            <h5 className='text-light'>{car.name}</h5>
            <h4>Type:</h4>
            <h5 className='text-light'>{car.type}</h5>
            <h4>Price:</h4>
            <h5 className='text-light'>{car.price}</h5>
            <h4>Description:</h4>
            <h5 className='text-light'>{car.description}</h5>
        </div>
    </div>
  )
}
