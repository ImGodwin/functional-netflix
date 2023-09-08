import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import SecondTopBar from './components/SecondTopBar';
import GenreOne from './components/GenreOne';
import GenreTwo from './components/GenreTwo';
import GenreThree from './components/GenreThree';
function App() {
  return (
    <div className="App bg-dark">
      <TopBar />
      <SecondTopBar />
      <GenreOne />
      <GenreTwo />
      <GenreThree />
      <Footer />
    </div>
  );
}

export default App;
