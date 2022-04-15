import React, {Component} from "react";
import {Card, CardGroup, Container, Button, Carousel} from "react-bootstrap";
import {HiCurrencyBangladeshi} from "react-icons/hi";

class CustomerHome extends Component<any, any>{
    render() {
        var imagePath = "https://www.w3schools.com/html/img_girl.jpg";
        return (
            <div>
                <Container>
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
                    
                    <CardGroup>
                        <Card style={{ width: '18rem' }} className="box">
                            <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://www.w3schools.com/html/img_girl.jpg"  style={{height: "180px", width: "100%"}} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{fontSize: "1.5em"}}><HiCurrencyBangladeshi/>100</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>

                <div className="container">
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
                </div>
            </div>
        );
    }
}

export default CustomerHome;