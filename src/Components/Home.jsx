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
// function carouselImage() {
//     return (


const Info = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className='carousel'>
                <Carousel variant='dark' >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className='investtext'> <h3 >SIMPLE INVESTING <br></br> PROSPEROUS FUTURE</h3></div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className='investtext'> <h3 >WE MEET YOUR FINANCIAL <br /> INVESTMENT NEEDS</h3></div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg" alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className='investtext'><h3 >WE WILL HELP TO CREATE <br></br> YOUR WEALTH</h3></div>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <section className='ourfocus'>
                <div className='focus'>
                    <h2>OUR FOCUS IS OUR CLIENTS' SUCCESS</h2>

                    <div className='focustext'>
                        <Row style={{ marginTop: '50px' }}>
                            <Col md={3}>
                                <Card border='0' className="focuscard" style={{ width: '18rem' }}>
                                    <Card.Img data-aos="fade-up" className="focusimg" variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus1.png" style={{ width: '60px', height: '70px' }} />
                                    <Card.Body>
                                        <Card.Title data-aos="fade-up" data-aos-offset="10">PRIVATE <br></br>BANKING</Card.Title>
                                        <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
                                            This is a banking service for wealthy individuals, which involves operations with client's money, preserving and increasing his state.
                                        </Card.Text>
                                        <div data-aos=""> <button data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" className="focusbtn" variant="outline-dark">Read More</button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card border='0' data-aos="fade-up" className="focuscard" style={{ width: '18rem' }}>
                                    <Card.Img className="focusimg" variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus2.png" style={{ width: '60px', height: '70px' }} />
                                    <Card.Body>
                                        <Card.Title data-aos="fade-up" data-aos-offset="10">TIME SAVING <br></br>TIPS</Card.Title>
                                        <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
                                            If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income.
                                        </Card.Text>
                                        <button className="focusbtn" variant="outline-dark">Read More</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card border='0' data-aos="fade-up" className="focuscard" style={{ width: '18rem' }}>
                                    <Card.Img className="focusimg" variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus3.png" style={{ width: '60px', height: '70px' }} />
                                    <Card.Body>
                                        <Card.Title data-aos="fade-up" data-aos-offset="10">BUDGETING <br></br>TIPS</Card.Title>
                                        <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
                                            Investment analysis and appraisal of investment projects (evaluation of ROI analysis of investment attractiveness of assets and branches)
                                        </Card.Text>
                                        <button data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" className="focusbtn" variant="outline-dark">Read More</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card border='0' data-aos="fade-up" className="focuscard" style={{ width: '18rem' }}>
                                    <Card.Img className="focusimg" variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus4.png" style={{ width: '60px', height: '70px' }} />
                                    <Card.Body>
                                        <Card.Title data-aos="fade-up" data-aos-offset="10">MONEY SAVING<br></br>IDEAS</Card.Title>
                                        <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
                                            Business planning: drafting and elaboration of business plans and investment memorandums, technical-economic justification, financial modeling.
                                        </Card.Text>
                                        <button className="focusbtn" variant="outline-dark">Read More</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section>

                <Details></Details>
            </section>
            <section>

                <Solutions></Solutions>
            </section>
            <section>
            <Productcarousel></Productcarousel>
          
            </section>
            {/* <section>
            <CardAPI></CardAPI>
          
            </section> */}
        </>
    );
};


class Details extends React.Component {
    state = { details: [] }
    //componentDidMount() - Mounting Phase
    componentDidMount() {
        axios.get('http://localhost:3000/investment').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }

    render() {
        return (
            <div className='investdetails'>
                <div className="head"> <h2 style={{ marginTop: "20px", paddingTop: "60px", textAlign: "center", fontWeight: "600" }}>ADVICE ON HOW TO MAKE WISE INVESTMENTS</h2>
                    <p style={{ fontWeight: "400", padding: "20px", fontSize: "18px", textAlign: "center", marginLeft: "65px", marginRight: "30px" }}>If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</p>
                </div>
                <Row style={{ marginLeft: '70px', marginRight: '50px' }}>
                    {this.state.details.filter(details => details.id).map(invest =>
                        <Col key={invest.id} style={{ marginTop: "30px" }} >
                            <Card data-aos="fade-up" className="investcard" style={{ width: '20rem', padding: '10px' }}>
                                <Card.Img className="investimg" variant="top" src={invest.image} />
                                <Card.Body>
                                    <Card.Title data-aos="fade-up" data-aos-offset="10" style={{ color: " #dc6226", fontSize: "25px", fontWeight: "700" }}>{invest.advice}</Card.Title>
                                    <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
                                        {invest.description}
                                    </Card.Text>
                                    <button className="investbtn" variant="outline-dark">    <FontAwesomeIcon icon={faArrowCircleRight} size="lg" /> </button>



                                </Card.Body>
                            </Card>
                        </Col>

                    )}
                </Row>
            </div>
        )
    }

}
class Solutions extends React.Component {
    render() {
        return (
            <>

                <Row>
                    <Col style={{ backgroundColor: "#dc6226 ", height: "450px" }} xs={6}>
                        <div className='partone'>
                            <h2 data-aos-delay="" data-aos-offset="10" data-aos="slide-right" style={{ color: "white", fontWeight: "600", fontSize: "35px", marginLeft: "220px", marginTop: "30px" }}>Fresh Investment <br></br>Solutions!</h2>
                            <ul data-aos-delay="200" data-aos-offset="10" data-aos="slide-right" class='custom-list'>
                                <li>Boutique Discretionary Investment<br></br> Management & Stockbroking Services.&nbsp;</li>
                                <li>Third Party Fund Investments</li>

                                <li>Invest in Africa Rising</li>
                                <li>Investment course</li>
                                <li>Bespoke Capital Protected Investments.&nbsp;</li>
                            </ul>

                            <button data-aos-delay="20" data-aos-offset="10" data-aos="slide-right" className="solution1btn" variant="outline-light">Read More</button>

                        </div>

                    </Col>
                    <Col style={{ backgroundColor: "#3f494e ", height: "450px", width:"630px"}} xs={6}>
                        <div className='parttwo'>
                            <h2 data-aos-delay="300" data-aos-offset="10" data-aos="slide-left" style={{ color: "white", fontWeight: "600", fontSize: "35px", marginLeft: "55px", marginTop: "30px" }}>Learning to Save <br></br>Money</h2>
                            <ul data-aos-delay="300" data-aos-offset="10" data-aos="slide-left" class='custom-list1'>
                                <li>Investment course&nbsp;</li>
                                <li>  Marketing course</li>
                                <li> Management course</li>


                                <p className="parasol" data-aos-delay="20" data-aos-offset="10" data-aos="slide-left" style={{ marginLeft: "20px", color: "#989d9b", fontWeight: "600", lineHeight: "1.4rem" }}>During the existence of the company, a lot <br></br>of companies and starters have become<br></br> our customers. Most of them are now <br></br>prosperous and popular in the business <br></br>sphere.&nbsp;</p>
                            </ul>
                            <button data-aos-delay="200" data-aos-offset="10" data-aos="slide-left" className="solutionbtn" variant="outline-light">Read More</button>

                        </div>

                    </Col>
                </Row>



            </>

        )
    }

}
class Productcarousel extends React.Component {
    render() {
        const settings = {
           
            infinite: true,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: true,
            
        };
        return (

            <>
                <div className="productname">
                    <div>
                        
                        <Slider {...settings}>
                            <div>
                                <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner11.jpg'></img>
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner4.jpg'></img>
                            </div>
                            <div>
                                <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner5.jpg'></img>
                            
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner6.jpg'></img>
                               
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner2.jpg'></img>
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner13.jpg'></img>
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner11.jpg'></img>
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner6.jpg'></img>
                            </div>
                            <div>
                            <img src='https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner13.jpg'></img>
                            </div>
                            
                        </Slider>
                    </div>

                </div>
              
            </>
        )
    }

}


//   class CardAPI extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={cards:[]}    //initial phase -> trainees[] -> empty
//     }

//     //componentDidMount() - Mounting Phase -> trainees[] -> filled with https://fakestoreapi.com/users
//     componentDidMount() 
//     {
//         fetch('https://localhost:7289/api/Details').then
//         (
//             response=>response.json()
//         ).then(cards=>this.setState({cards:cards}))

//     }
//     render(){

    
//       return (
//         <>
//         <div className='carddetails'>
//  <div className="head"> <h2 style={{ marginTop: "20px", paddingTop: "60px", textAlign: "center", fontWeight: "600" }}>ADVICE ON HOW TO MAKE WISE INVESTMENTS</h2>
//      <p style={{ fontWeight: "400", padding: "20px", fontSize: "18px", textAlign: "center", marginLeft: "65px", marginRight: "30px" }}>If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</p>
//  </div>
//  <Row style={{ marginLeft: '70px', marginRight: '50px' }}>
//  {this.state.cards.map(card=>
   
//          <Col key={card.id} style={{ marginTop: "30px" }} >
//              <Card data-aos="fade-up" className="detcard" style={{ width: '20rem', padding: '10px' }}>
//                  <Card.Img className="investimg" variant="top" src={card.image} />
//                  <Card.Body>
//                      <Card.Title data-aos="fade-up" data-aos-offset="10" style={{ color: " #dc6226", fontSize: "25px", fontWeight: "700" }}>{card.title}</Card.Title>
//                      <Card.Text data-aos-delay="200" data-aos-offset="10" data-aos="fade-up" style={{ fontSize: '13px', lineHeight: '1.5rem' }}>
//                          {card.description}
//                      </Card.Text>
//                      <button className="investbtn" variant="outline-dark">    <FontAwesomeIcon icon={faArrowCircleRight} size="lg" /> </button>



//                  </Card.Body>
//              </Card>
//          </Col>
//  )
//  }
 
    
//  </Row>
//  </div>
 

  



// </>
//   )
     
    
//   }
// }




export default Info;