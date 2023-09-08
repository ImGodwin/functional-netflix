import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Container fluid className="bg-dark d-flex justify-content-center mt-3 text-light pb-5">
        <Row>
          <Col>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>

            <div className="d-flex justify-content-between border px-3 py-2">
              <span>Service </span>
              <span className="ms-1">Code</span>
            </div>
          </Col>

          <Col>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </Col>

          <Col>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </Col>

          <Col>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
