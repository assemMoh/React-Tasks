import React from 'react'
import { carsList } from '../models/cars'
import { MyCard } from './MyCard'


export function AllCars() {
    
  return (
    <div className="bg-light p-3 text-center">
        <div className="container">
            <div className="row g-2">
                {
                    carsList.map((item, id) => {
                        return <MyCard key={id} carObject={item} />
                    })
                }
            </div>
        </div>
    </div>
  )
}
