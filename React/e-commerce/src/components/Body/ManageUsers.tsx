import React from 'react';
import { FormControl } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { Button, Form, Table } from 'reactstrap';




const ManageUsers = () => {


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
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Button href="#" variant="success">Edit</Button></td>
      <td><Button href="#" variant="danger">Delete</Button></td>
    </tr>
  </tbody>
</Table>
    </div>
    )
}
export default ManageUsers;