import React, { useEffect, useState } from 'react'
import { CarRecord } from './CarRecord'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export function Cars() {

    let [carObject, setCarObject] = useState([])

    let retreiveCars = async () => {
        try{
            let response = await axios.get('http://localhost:3001/cars')
            setCarObject(response.data)
        }
        catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        retreiveCars()
    })

  return (
    <div>
        <div className='container-fluid p-5 bg-secondary'>
            <NavLink to={`/viewCars/0/edit`}>
                <button className='btn btn-success' > Add car </button>
            </NavLink>
            <table className="table text-light">
                <thead className="text-dark">
                    <tr>
                    <th >#</th>
                    <th >Name</th>
                    <th >Type</th>
                    <th >Price</th>
                    <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {carObject.map((item) => {
                        return <CarRecord key={item.id} carObj={item} />
                    })}
                </tbody>
            </table>
      </div>
    </div>
  )
}
