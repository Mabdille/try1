import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
import HomePage from "./components/HomePage"
import HomeScreen from "./components/HomeScreen";
const App = () => {
  return (
    <div className="App">
      <h1 className='text-info  text-center'>
      </h1>
      
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/homescreen">Quran</Link>
          </li>
          </ul>
      </nav>
          <Routes>
              <Route path="/" exact element={<HomePage/>} />
              <Route path="/homescreen" element={<HomeScreen/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
