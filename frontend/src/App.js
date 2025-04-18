import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
