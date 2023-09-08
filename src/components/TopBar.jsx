import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <Navbar className="bg-dark mb-3">
        <Navbar.Brand href="#home">
          <img
            src="../../public/assets/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Netflix logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#link">
              <strong className="text-light">TV SHOWS</strong>
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              RECENTLY ADDED
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              MY LIST
            </Nav.Link>
          </Nav>

          <Nav.Link href="#link"></Nav.Link>
          <Nav.Link href="#link" className="text-light">
            KIDS
          </Nav.Link>
          <Nav.Link href="#link">
            <i class="bi bi-bell-fill"></i>
          </Nav.Link>
          <Nav.Link href="#link">
            <i class="bi bi-person-fill"></i>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
