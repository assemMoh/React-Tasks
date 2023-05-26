import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'

export function ValidatedForm() {
    
    let [dataInfo, setDataInfo] = useState([])

    let [formValues, setFormValues] = useState({
        username: "",
        age: 0
    })


    let [error, setError] = useState({
        username: null,
        age: null
    })



    let checkError = (e) => {
        if (e.target.name == 'username' && e.target.value.length < 5) 
            return [false, "Name must be at least 5 characters"]
        if (e.target.name == 'age' && e.target.value < 18)
            return [false, "Age must be more than 18"]
        return [true, null]
    }


    let updateInput = (e) => {
        
        let err = checkError(e)

        if (!err[0])
        {
            setError({
                ...error, [e.target.name]: err[1]
            })
        }
        else
        {
            setFormValues({
                ...formValues, [e.target.name]: e.target.value
            })
            setError({
                ...error, [e.target.name]: err[1]
            })
        }
        
    }


    let saveFormValues = (e) => {
        e.preventDefault()
        console.log(error.username)
        if (error.username == null && error.age == null) {
            setDataInfo([...dataInfo, formValues])
            setFormValues({
                username: "",
                age: 0
            })
        }

    }

    let o = "affad"
  return (
    <div className='container mt-3'>
        <Form  onSubmit={saveFormValues}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={updateInput} autoComplete='off' type="text" name="username" placeholder="Enter your username" />
                <Form.Text className="text-muted">
                {error.username}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={updateInput} autoComplete='off' type="number" placeholder="Enter your age" name="age" />
                <Form.Text className="text-muted ">
                {error.age}
                </Form.Text>
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

       
        <Table striped bordered hover className='mt-5'>
            <thead>
                <tr>
                <th>#</th>
                <th>UserName</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {dataInfo.map( (item, ind) => { 
                return (
                    <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.age}</td>
                    </tr>
            )})}
                
            </tbody>
        </Table>


    </div>
  )
}
