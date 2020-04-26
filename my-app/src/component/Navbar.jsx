import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function Navbar() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">SERVICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">WORK</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="underline" eventKey="link-2">THE TEAM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <img class="logo" src="https://w1.pngwave.com/png/642/857/190/tools-and-utensils-icon-phone-icons-icon-hand-graving-smartphone-icon-mobile-phone-icon-mobile-phone-case-mobile-phone-accessories-gadget-text-technology-electronic-device-png-clip-art.png" alt="" />
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;