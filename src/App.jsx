import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import SecondTopBar from './components/SecondTopBar';
import GenreOne from './components/GenreOne';
function App() {
  return (
    <div className="App">
      <TopBar />
      <SecondTopBar />
      <GenreOne />

      <Footer />
    </div>
  );
}

export default App;
