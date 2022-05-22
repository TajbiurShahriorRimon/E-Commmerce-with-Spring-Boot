import React from 'react';
import { Card, Button } from 'react-bootstrap';



const AdminHome = () => {


return (
        <div className='container'>

            <div className="row justify-content-lg-start">
                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} border="primary" className="box">
                        <Card.Body>
                            <Card.Title>Active Users</Card.Title>
                            <Card.Body>0</Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} border="danger" className="box">
                        <Card.Body>
                            <Card.Title>Inative Users</Card.Title>
                            <Card.Body>0</Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} border="info" className="box">
                        <Card.Body>
                            <Card.Title>Todays Sales</Card.Title>
                            <Card.Body>0</Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} border="success" className="box">
                        <Card.Body>
                            <Card.Title>Total Sales</Card.Title>
                            <Card.Body>0</Card.Body>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}
export default AdminHome;