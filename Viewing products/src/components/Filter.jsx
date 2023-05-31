import React, { useState } from 'react'
import { paraList } from '../models/paraList'


export function Filter() {

    let [searchInput, setSearchInput] = useState("")


    let updateInput = (e) => {
        setSearchInput(e.target.value)
    }

    let check = (para) => {
        let found = para.includes(searchInput)
        if (found)
        {
            return true
        }
        else
            return false
    }

  return (
    <div>
        <div className=' h-25 p-3 m-3 bg-secondary'>
            <input type='text' className='w-25' onChange={updateInput} name={searchInput} placeholder='Type to search...'></input>
            <div>
                {paraList.map((item, id) => {
                    return (check(item) 
                    &&
                    ( 
                    <div className='bg-warning mt-3' key={id}>
                        <p className='p-2'>{item}</p>
                    </div>))
                })}
            </div>
        </div>

    </div>
  )
}
