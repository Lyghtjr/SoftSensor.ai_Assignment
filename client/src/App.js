import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart'
import Error from './pages/Error';
import Nav from './components/NavBar'
import HomePage from './pages/HomePage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route  path="/error" element={<Error/>} />
        </Routes>
        <Nav/>
      </Router>

    </div>
  );
}

export default App;
