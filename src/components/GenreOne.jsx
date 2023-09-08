import { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class GenreOne extends Component {
  state = {
    movies: this.setState.movie,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=6752e8d4&s=superman');

      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        this.setState({ movies: data });
        //console.log();
      }
    } catch (error) {
      //console.log(error);
    }
  };

  render() {
    return (
      <Container>
        {/* <Row>
          {this.state.movies.Search.map((singleMovieImage) => (
            <Col key={singleMovieImage.imdbID}>
              <Card style={{}}>
                <Card.Img variant="top" src={singleMovieImage.Poster} />
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    );
  }
}

export default GenreOne;
