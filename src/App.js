import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipePage from './pages/RecipePage.js';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:type" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;