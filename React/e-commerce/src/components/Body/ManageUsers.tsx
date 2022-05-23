import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { Button, Form, Table } from 'reactstrap';
import base_url from '../../api/bootapi';




function ManageUsers(props:any){

    useEffect(()=>{
      getAllUsers();
    },[]);
  
    const [user,setUsers] = useState([]);
  
    const getAllUsers = () => {
        axios.get(`${base_url}allUsers`).then(
            (response) => {
                console.log(response.data);
                setUsers(response.data);
  
            },
            (error) => {
  
            }
  
        );
      };


return (
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <Form className="d-flex align-content-md-center position-fixed">
            <FormControl
                type="search"
                placeholder="Search By Name"
                aria-label="Search"
                />
                <Button variant="outline-success"><ImSearch/></Button>
        </Form>
        </div><br></br><br></br>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Mail</th>
      <th>Phone</th>
      <th>Status</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
  {
   user.map((value : any ) => {
    return (
      <tr>
        <td>{value.name}</td>
        <td>{value.address}</td>
        <td>{value.mail}</td>
        <td>{value.phone}</td>
        <td>{value.status}</td>
        <td>{value.type}</td>
        <td><Button href="#" variant="success">Edit</Button></td>
        <td><Button href="#" variant="danger">Delete</Button></td>
      </tr>
    )
  }
  )         
}
  </tbody>
</Table>
    </div>
    )
}
export default ManageUsers;