import React from "react";
import {
    Container,
    Navbar,
    Image,
    Form,
    FormControl,
    Button,
    Row,
    Col,
} from "react-bootstrap";
import "../../../assets/styles/Navbar/TopNavbar.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

function TopNavbar() {
    return (
        <div id="TopNavbar" className="TopNavbar">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Navbar.Brand href="#home">
                            <Image
                                src={require("C:/Users/semiu/Documents/VS Code/Pure-Foods-Store/src/assets/images/pureFoodsLogoImage.png")}
                                alt="Pure Foods Logo"
                                width="95"
                                height="95"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col xs className="d-flex justify-content-center">
                        <Form className="d-flex" inline>
                            <FormControl
                                type="search"
                                placeholder="Search for products"
                                className="search-bar"
                                aria-label="Search"
                            />
                            <Button className="search-button">
                                <i className="bi bi-search"></i>
                            </Button>
                        </Form>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                        <div className="sign-in d-flex align-items-center">
                            <i className="bi bi-person-circle sign-in-icon"></i>
                            <div className="sign-in-text">
                                <span><a className="sign-in-text" href="TEMP">Sign In</a></span>
                                <span> /</span>
                                <span><a className="create-account-text" href="TEMP">Create Account</a></span>
                            </div>
                        </div>
                        <i className="bi bi-cart cart-icon"></i>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopNavbar;
