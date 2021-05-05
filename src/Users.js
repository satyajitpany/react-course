import React, { useState, useEffect,Fragment } from 'react'
import { Table } from 'react-bootstrap'
export const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
      data.json().then(result => {
        setUser(result.data);
      })
    })

  },[])

  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
          {
          user.map((item,index)=>
            <tr key={index}>
              <td>{item.employee_name}</td>
            <td>{item.employee_name}</td>
              <td>{item.employee_age}</td>
              <td>{item.employee_salary}</td>
            </tr>
          )}
        </thead>
        
      </Table>
    </Fragment>
  )
}


//map() listing