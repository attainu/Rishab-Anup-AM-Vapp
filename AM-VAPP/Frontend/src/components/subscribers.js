import React, { Component } from 'react'
import { Row, Col, Container, Image, Modal, Badge } from "react-bootstrap"
import "../styles/subscribers.css";

class subscribers extends Component {
    render() {
        return (
            <div className= 'container'>
            
                <Modal.Header closeButton>
                    
                    <Container>
                        <Row>
                        <Col>
                            <Image className='image' src="mojo.png" roundedCircle />
                        </Col>
                        <Col>
                            <div>
                                <h1>MOJO TV</h1>
                            </div>
                            <Badge classNname='name'variant="secondary">SUBSCRIBED</Badge>
                        </Col>
                        </Row>
                   </Container>
               </Modal.Header>
               <Modal.Body>
                    <p>Movie , Anime</p>
                </Modal.Body>
           
            
</div>




        )
    }
}

export default subscribers;
