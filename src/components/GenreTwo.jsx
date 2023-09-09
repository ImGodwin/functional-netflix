import { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class GenreTwo extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=6752e8d4&s=the office');

      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        this.setState({ movies: data.Search });
        //console.log();
      }
    } catch (error) {
      //console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-center mx-5">
            <Container md={6} lg={5} fluid className="my-3 d-flex flex-direction-row">
              <Row>
                {this.state.movies.slice(0, 5).map((singleMovieImage) => (
                  <Col className="d-flex justify-content-center" key={singleMovieImage.imdbID}>
                    <Card className="mt-3 border-dark" style={{ height: '300px', width: '250px' }}>
                      <Card.Img
                        style={{ height: '300px', width: '250px' }}
                        variant="top"
                        src={singleMovieImage.Poster}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default GenreTwo;
