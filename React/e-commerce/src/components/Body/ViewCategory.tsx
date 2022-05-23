import React from 'react';
import { FormControl } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { Button, Form, Table } from 'reactstrap';




const ViewCategory = () => {


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
      <th>Category Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shirt</td>
      <td>Acive</td>
      <td><Button href="#" variant="success">Edit</Button></td>
      <td><Button href="#" variant="danger">Delete</Button></td>
    </tr>
  </tbody>
</Table>
    </div>
    )
}
export default ViewCategory;