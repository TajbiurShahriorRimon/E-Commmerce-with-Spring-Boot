import React from 'react';
import { Card, Button } from 'react-bootstrap';
import  "./box.css";



const VendorHome = () => {

    const CardInfo = [
        {image: "https://static-01.daraz.com.bd/p/c142dfdaba991bc0404e0ec355d9dc54.jpg", title: "Shirt", text: "Full Sleeve", price: "1000 tk"},
        {image: "https://redbridgejeans.de/media/image/product/65680/lg/m4249_red-bridge-mens-jeans-pants-slim-fit-denim-stonewashed-arena-m4249_16~3.jpg", title: "Pant", text: "Blue Jeans", price: "1000 tk"},
        {image: "https://aristaexport.com/images/products/424-high-quality-100-cotton-men-s-polo-t-shirt-with-custom-logo-wholesale-2.jpg", title: "T-Shirt", text: "Polo", price: "1000 tk"},
        {image: "https://static.aadi.com.bd/__sized__/products/2078-11647-panjabi-red-bikri-25423-1-thumbnail-500x500-70.jpeg", title: "Punjabi", text: "Long", price: "1000 tk"},
    ]

    const RenderCard = (card: any, index: any) => {
        return(
            <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src={card.image} className="photo"/>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle>{card.price}</Card.Subtitle>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary" href='/vAddProducts'>Edit</Button>
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
=======
        <div className="grid">
           {CardInfo.map(RenderCard)}
        </div>    
    )
}
export default VendorHome;

