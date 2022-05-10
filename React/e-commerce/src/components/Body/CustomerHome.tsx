import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card, CardGroup, Container, Button, Carousel} from "react-bootstrap";
import {HiCurrencyBangladeshi} from "react-icons/hi";

class CustomerHome extends Component<any, any>{
    render() {
        var imagePath = "https://www.w3schools.com/html/img_girl.jpg";
        return (
            <div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                /*src="holder.js/800x400?text=First slide&bg=373940"*/
                                src="https://www.w3schools.com/html/img_girl.jpg"
                                style={{height: "365px", width: "100%"}}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                /*src="holder.js/800x400?text=Second slide&bg=282c34"*/
                                src="https://www.w3schools.com/html/img_girl.jpg"
                                style={{height: "365px", width: "100%"}}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                /*src="holder.js/800x400?text=Third slide&bg=20232a"*/
                                src="https://www.w3schools.com/html/img_girl.jpg"
                                style={{height: "365px", width: "100%"}}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodore cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/*<div className="container">
                    <div className="row justify-content-lg-start">
                        <div className="col-lg-3 mb-5">
                            <Card>
                                <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style={{color: "red", }}>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                                    <div>Rating: 4</div>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className="col-lg-3 mb-5">
                            <Card>
                                <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style={{color: "red", }}>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                                    <div>Rating: 4</div>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className="col-lg-3 mb-5">
                            <Card>
                                <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style={{color: "red", }}>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                                    <div>Rating: 4</div>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className="col-lg-3 mb-5">
                            <Card>
                                <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style={{color: "red", }}>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                                    <div>Rating: 4</div>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className="col-lg-3 mb-5">
                            <Card>
                                <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style={{color: "red", }}>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                                    <div>Rating: 4</div>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                </div>*/}
                <br/>
                <div className="container">
                    <div className="row justify-content-lg-start">
                        <div className="col-lg-3 mb-5">
                            <Card style={{ width: '18rem' }} className="box">
                                <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg" style={{height: "180px", width: "100%"}}/>
                                <Card.Body>
                                    <Card.Title>Jeans</Card.Title>
                                    <Card.Text>Lorem Ipsum Telle Amore</Card.Text>
                                    <Button variant="primary" href=''>Edit</Button>
                                    <Link to={`/product/productDetails/2`}>
                                        <button className="btn btn-warning">Information</button>
                                    </Link>
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
                                    <Link to={`/product/productDetails/2`}>
                                        <button className="btn btn-warning">Information</button>
                                    </Link>
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
                                    <Link to={`/product/productDetails/2`}>
                                        <button className="btn btn-warning">Information</button>
                                    </Link>
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
                                    <Link to={`/product/productDetails/2`}>
                                        <button className="btn btn-warning">Information</button>
                                    </Link>
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

                                    <Link to={`/product/productDetails/2`}>
                                        <button className="btn btn-warning">Information</button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerHome;