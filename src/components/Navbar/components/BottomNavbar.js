import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/styles/Navbar/BottomNavbar.css'; // Import the CSS file for BottomNavbar

function BottomNavbar() {
    return (
        <div id="BottomNavbar" className="BottomNavbar">
            <Container fluid className="p-0">
                <Row className="banner m-0">
                    <Col xs={12} className="text-center">
                        <div className="banner-content">
                            <span className="deal">20% Off All Electronics</span>
                            <span className="deal">Buy 1 Get 1 Free on All Snacks</span>
                            <span className="deal">Up to 50% Off Selected Items</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BottomNavbar;
