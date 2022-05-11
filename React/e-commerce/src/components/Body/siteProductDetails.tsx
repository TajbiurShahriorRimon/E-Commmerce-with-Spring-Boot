import React, {Component} from "react";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

class SiteProductDetails extends Component<any, any>{
    render() {
        var imageArray = [
            "https://thumbs.dreamstime.com/b/flowers-4999705.jpg",
            "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
        ]
        const imagePath = "https://www.w3schools.com/html/img_girl.jpg";
        return(
            <div className="container">
                <br/> <br/>
                <div className="form-control">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <TransformWrapper
                                    initialScale={1}
                                >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>

                                            <TransformComponent>
                                                <img src="https://www.w3schools.com/html/img_girl.jpg" alt="test"
                                                     style={
                                                         {  height: 300,
                                                             width: 250
                                                         }
                                                     }
                                                />
                                            </TransformComponent>
                                            <div className="tools">
                                                <button onClick={() => zoomIn()} className="btn-dark btn">+</button>
                                                <button onClick={() => zoomOut()} className="btn btn-info">-</button>
                                                <button onClick={() => resetTransform()} className="btn btn-outline-danger">x</button>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>

                            <div className='col-lg-6'>
                                <div>
                                <TransformWrapper
                                    initialScale={1}
                                >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>

                                            <TransformComponent>
                                                <img src={imageArray[0]} alt="test"
                                                     style={
                                                         {  height: 200,
                                                             width: 120
                                                         }
                                                     }
                                                />
                                            </TransformComponent>
                                            <div className="tools">
                                                <button onClick={() => zoomIn()} className="btn-dark btn">+</button>
                                                <button onClick={() => zoomOut()} className="btn btn-info">-</button>
                                                <button onClick={() => resetTransform()} className="btn btn-outline-danger">x</button>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                                </div>
                                <div></div>
                            </div>

                            <div className='col-lg-6'>
                                <div>
                                    <TransformWrapper
                                        initialScale={1}
                                    >
                                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                            <React.Fragment>

                                                <TransformComponent>
                                                    <img src={imageArray[1]} alt="test"
                                                         style={
                                                             {  height: 200,
                                                                 width: 120
                                                             }
                                                         }
                                                    />
                                                </TransformComponent>
                                                <div className="tools">
                                                    <button onClick={() => zoomIn()} className="btn-dark btn">+</button>
                                                    <button onClick={() => zoomOut()} className="btn btn-info">-</button>
                                                    <button onClick={() => resetTransform()} className="btn btn-outline-danger">x</button>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </TransformWrapper>
                                </div>
                                <div>
                                    <TransformWrapper
                                        initialScale={1}
                                    >
                                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                            <React.Fragment>

                                                <TransformComponent>
                                                    <img src={imageArray[1]} alt="test"
                                                         style={
                                                             {  height: 200,
                                                                 width: 120
                                                             }
                                                         }
                                                    />
                                                </TransformComponent>
                                                <div className="tools">
                                                    <button onClick={() => zoomIn()} className="btn-dark btn">+</button>
                                                    <button onClick={() => zoomOut()} className="btn btn-info">-</button>
                                                    <button onClick={() => resetTransform()} className="btn btn-outline-danger">x</button>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </TransformWrapper>
                                </div>
                            </div>

                            {/*<div>
                                <TransformWrapper
                                    initialScale={1}
                                >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>

                                            <TransformComponent>
                                                <img src={imageArray[1]} alt="test"
                                                     style={
                                                         {  height: 200,
                                                             width: 120
                                                         }
                                                     }
                                                />
                                            </TransformComponent>
                                            <div className="tools">
                                                <button onClick={() => zoomIn()} className="btn-dark btn">+</button>
                                                <button onClick={() => zoomOut()} className="btn btn-info">-</button>
                                                <button onClick={() => resetTransform()} className="btn btn-outline-danger">x</button>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>*/}
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label><strong>Product Name:</strong> Jeans Blue Faded</label>
                            </div>
                            <div>
                                <label><strong>Price:</strong> <label style={{fontSize: 20}}>Tk 100</label></label>
                            </div>
                            <div>
                                <label><strong>Category:</strong> Jeans</label>
                            </div>
                            <div>
                                <label><strong>Vendor:</strong> Ariful</label>
                            </div>
                            <div>
                                <label><strong>Rating:</strong> 4.5</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteProductDetails
