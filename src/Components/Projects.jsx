import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from "axios";
import { render } from "@testing-library/react";
import '../Styles/Home.css';

import { Component } from "react";
import Slider from "react-slick";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
class CardAPI extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={cards:[]}    
    }

    
    componentDidMount() 
    {
        fetch('https://localhost:7289/api/Details').then
        (
            response=>response.json()
        ).then(cards=>this.setState({cards:cards}))

    }
    render(){

    
      return (
        <>
        <div className='carddetails'>
 <div className="head" style={{marginTop:"90px"}}> <h2 style={{ marginTop: "40px", paddingTop: "60px", textAlign: "center", fontWeight: "600" }}>FEATURED PROJECTS</h2>
     <p style={{ fontWeight: "400", padding: "20px", fontSize: "18px", textAlign: "center", marginLeft: "65px", marginRight: "30px" }}>Haber offers a full range of financial services for private and corporate clients. Strong competitive advantages of an experienced and ambitious team brought Haber top 5 investment banks for two years on the market.</p>
 </div>
 <Row style={{ marginLeft: '70px', marginRight: '50px' }}>
 {this.state.cards.map(card=>
   
         <Col key={card.id} style={{ marginTop: "30px" }} >
             <Card data-aos="fade-up" className="detcard" style={{ width: '20rem', padding: '10px' }}>
                 <Card.Img className="investimg" variant="top" src={card.image} />
                 <Card.Body>
                     <Card.Title data-aos="fade-up" data-aos-offset="10" style={{ color: " #dc6226", fontSize: "25px", fontWeight: "700" }}>{card.title}</Card.Title>
                     <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
                         {card.description}
                     </Card.Text>
                     <button className="investbtn" variant="outline-dark">    <FontAwesomeIcon icon={faArrowCircleRight} size="lg" /> </button>



                 </Card.Body>
             </Card>
         </Col>
 )
 }
 
    
 </Row>
 </div>
 

  



</>
  )
     
    
  }
}
export default CardAPI;