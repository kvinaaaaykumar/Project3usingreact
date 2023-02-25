import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Nav />
      < Home />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
