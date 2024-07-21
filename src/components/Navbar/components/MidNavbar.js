import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/Navbar/MidNavbar.css";

function MidNavbar() {
    return (
        <div id="MidNavbar" className="MidNavbar">
            <Container fluid>
                <Row className="categories-row">
                    <Col className="category text-center" xs="auto">
                        <a href="#organic-produce">Organic Produce</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#vegan">Vegan</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#gluten-free">Gluten-Free</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#dairy-free">Dairy-Free</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#keto">Keto</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#paleo">Paleo</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#supplements">Supplements</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#superfoods">Superfoods</a>
                    </Col>
                    <Col className="category text-center" xs="auto">
                        <a href="#healthy-snacks">Healthy Snacks</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MidNavbar;
