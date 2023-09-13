import { Component } from 'react';
import { Container, NavDropdown } from 'react-bootstrap';

const SecondTopBar = () => {
  return (
    <div className="px-4">
      <Container fluid className="bg-dark d-flex text-light ">
        <h1>TV Shows</h1>
        <div className="d-flex justify-content-center align-self-center ms-5 border ">
          <NavDropdown className="py-1 px-3" title="Genres" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </div>
  );
};

export default SecondTopBar;
