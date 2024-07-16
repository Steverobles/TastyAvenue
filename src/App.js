import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RecipePage from './pages/RecipePage.js';
import HomePage from './pages/HomePage';
import TastyRoulettePage from './pages/TastyRoulettePage.js';
import Navbar from './components/Navbar';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/recipes" element={<RecipePage/>} />
        <Route path="/tasty-roulette" element={<TastyRoulettePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
