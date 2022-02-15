import React from 'react';
import { Button,ListGroup,ListGroupItem } from 'reactstrap';


function RegOption(){
    return(
        <div className='text-center'>
            <ListGroup>
                <ListGroupItem className='position-absolute top-50 start-50 translate-middle w-50 bg-primary text-light ' tag="a" href="/uReg" to="/uReg" action>
                    User Registration
                </ListGroupItem>
            </ListGroup>
        </div>
    )

}
 export default RegOption;