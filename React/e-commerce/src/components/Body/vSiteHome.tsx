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
           {CardInfo.map(RenderCard)}
        </div>    
    )
}
export default VendorHome;

