import React from 'react';
import { Card, Button } from 'react-bootstrap';



const VendorHome = () => {

    const CardInfo = [
        {image: "", title: "Shirt", text: "Full Sleeve"},
        {image: "", title: "Pant", text: "Blue Jeans"},
        {image: "", title: "T-Shirt", text: "Polo"},
        {image: "", title: "Punjabi", text: "Long"},
    ]

    const RenderCard = (card: any, index: any) => {
        return(
            <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top"  src={card.image}/>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary" href=''>Edit</Button>
            </Card.Body>
            </Card>

        )
    }

return (
        <div className='container'>
           {/*{CardInfo.map(RenderCard)}*/}

            <div className="row justify-content-lg-start">
                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} className="box">
                        <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}}/>
                        <Card.Body>
                            <Card.Title>Jeans</Card.Title>
                            <Card.Text>Lorem Ipsum Telle Amore</Card.Text>
                            <Button variant="primary" href=''>Edit</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} className="box">
                        <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}}/>
                        <Card.Body>
                            <Card.Title>Jeans</Card.Title>
                            <Card.Text>Lorem Ipsum Telle Amore</Card.Text>
                            <Button variant="primary" href=''>Edit</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} className="box">
                        <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}}/>
                        <Card.Body>
                            <Card.Title>Jeans</Card.Title>
                            <Card.Text>Lorem Ipsum Telle Amore</Card.Text>
                            <Button variant="primary" href=''>Edit</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} className="box">
                        <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}}/>
                        <Card.Body>
                            <Card.Title>Jeans</Card.Title>
                            <Card.Text>Lorem Ipsum Telle Amore</Card.Text>
                            <Button variant="primary" href=''>Edit</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 mb-5">
                    <Card style={{ width: '18rem' }} className="box">
                        <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}}/>
                        <Card.Body>
                            <Card.Title>Jeans</Card.Title>
                            <Card.Text>Lorem Ipsum Telle Amore</Card.Text>
                            <Button variant="primary" href=''>Edit</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default VendorHome;

