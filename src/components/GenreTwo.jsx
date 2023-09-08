import { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class GenreOne extends Component {
  state = {
    image: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=6752e8d4&s=superman');

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ image: data });
        // console.log('setState');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          {this.state.movie.map((singleMovie) => (
            <Col key={singleMovie.imdbID}>
              <Card style={{ height: '300px' }}>
                <Card.Img variant="top" src={singleMovie.Poster} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GenreOne;
