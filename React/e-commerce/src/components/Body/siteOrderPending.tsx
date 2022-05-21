import React, {Component} from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HiInformationCircle} from "react-icons/hi";
import base_url from "../../api/bootapi";
import StarRatings from "react-star-ratings";

class SiteOrderPending extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }

    state = {
        result: [],
        loading: true,
    }

    async componentDidMount() {
        const resp = await axios.get(`${base_url}order/getPedingOrders`);
        console.log(resp);
        if (resp.status === 200) {
            this.setState({
                result: resp.data,
                loading: false,
            })
        }
    }

    render() {
        var resultTable;

        if(this.state.loading){
            resultTable = <h1>Loading...</h1>
        }
        else {
            resultTable = this.state.result.map((item : any) => {
                return(
                    <div key={item.id}>
                        <Card>
                            <Card.Header>
                                <strong>{item.date}</strong><br/>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Customer: {item.customer.mail.name}</Card.Title>
                                <Card.Text>
                                    <strong>Price: {item.totalPrice}</strong>
                                </Card.Text>
                                <button style={{float: "right"}}
                                        className="btn-danger rounded-end btn"
                                    /*hidden={this.state.test == "12434" ? true : false}*/
                                >
                                    Check Product List
                                </button>
                            </Card.Body>
                        </Card> <br/>
                    </div>
                )
            })
        }
        return(
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5">
                            {resultTable}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteOrderPending;