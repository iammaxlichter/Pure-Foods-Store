import React from 'react';
import { Container } from 'react-bootstrap';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import MidNavbar from './components/MidNavbar';

function Navbar() {
    return (
        <div id="navbar" className="navbar">
            <Container>
                <TopNavbar></TopNavbar>
                <MidNavbar></MidNavbar>
                <BottomNavbar></BottomNavbar>
            </Container>
        </div>
    );
}

export default Navbar;
