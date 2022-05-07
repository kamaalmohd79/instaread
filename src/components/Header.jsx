import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./header.css";
import Buy from '../assets/buy-24.png';
import img from '../assets/img.jpg';

const Header = () => {
    return(
        <>
            <Container className="my-5 header_container me-5">
                <Row >
                    <Col lg="4" >
                    <Card  style={{ width: '18rem', height: '21rem' }} >
            <Card.Body >
                
                <img src={img}  alt="image" height="315"/>
                
              </Card.Body>
            </Card>
                    </Col>
                    <Col lg="8" className="my-5">
                    <h3> Astrophysics for People in a Hurry's Summary</h3>
                    <p> Key Insights & Analysis</p>
                    <p className="text-muted">Kelly Brogan, MD with Kristin Loberg</p>
                    <div style={{ width: '32rem' }} className="d-flex justify-content-between mt-5 mb-2 me-5">
                        <p><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M456 32h-304C121.1 32 96 57.13 96 88v320c0 13.22-10.77 24-24 24S48 421.2 48 408V112c0-13.25-10.75-24-24-24S0 98.75 0 112v296C0 447.7 32.3 480 72 480h352c48.53 0 88-39.47 88-88v-304C512 57.13 486.9 32 456 32zM464 392c0 22.06-17.94 40-40 40H139.9C142.5 424.5 144 416.4 144 408v-320c0-4.406 3.594-8 8-8h304c4.406 0 8 3.594 8 8V392zM264 272h-64C186.8 272 176 282.8 176 296S186.8 320 200 320h64C277.3 320 288 309.3 288 296S277.3 272 264 272zM408 272h-64C330.8 272 320 282.8 320 296S330.8 320 344 320h64c13.25 0 24-10.75 24-24S421.3 272 408 272zM264 352h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.25 0 24-10.75 24-24S277.3 352 264 352zM408 352h-64C330.8 352 320 362.8 320 376s10.75 24 24 24h64c13.25 0 24-10.75 24-24S421.3 352 408 352zM400 112h-192c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-64C432 126.3 417.7 112 400 112z"/></svg>18 min read</p>
                        <p><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 287.9l-.0042 112C511.1 444.1 476.1 480 432 480c-26.47 0-48-21.56-48-48.06V304.1C384 277.6 405.5 256 432 256c10.83 0 20.91 2.723 30.3 6.678C449.7 159.1 362.1 80.13 256 80.13S62.29 159.1 49.7 262.7C59.09 258.7 69.17 256 80 256C106.5 256 128 277.6 128 304.1v127.9C128 458.4 106.5 480 80 480c-44.11 0-79.1-35.88-79.1-80.06L0 288c0-141.2 114.8-256 256-256c140.9 0 255.6 114.5 255.1 255.3C511.1 287.5 511.1 287.7 512 287.9z"/></svg>14 min listen</p>
                        <p><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>Add to Library</p>
                        <div  className="d-flex flex-column">
                        <p className="text-primary"><img src={Buy} alt="buy" />Buy Book</p>
                        <p className="book_section" >Google Books</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-secondary btn-sm me-2">Business & Finance</button>
                        <button className="btn btn-secondary btn-sm">Business & Finance</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Header;