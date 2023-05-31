import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export function CarRecord(props) {
    let { carObj } = props
    let nav = useNavigate()
    let erase = () => {
        axios.delete(`http://localhost:3001/cars/${carObj.id}`, carObj).then(() => {
            nav('/cars')
        })
    }

  return (
        <tr>
            <th>{carObj.id}</th>
            <td>{carObj.name}</td>
            <td>{carObj.type}</td>
            <td>{carObj.price}</td>
            <td >
                <NavLink to={`/viewCars/${carObj.id}`}>
                    <i className="text-info mx-2 bi bi-eye-fill"></i>
                </NavLink>
                <NavLink to={`/viewCars/${carObj.id}/edit`}>
                    <i className="text-warning mx-2 bi bi-pencil-square"></i>
                </NavLink>
                <NavLink>
                    <i onClick={erase} class="text-danger mx-2 bi bi-trash"></i>

                </NavLink>

            </td>
        </tr>
  )
}
