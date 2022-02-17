import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
import HomePage from "./components/HomePage"
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
 
      <Router>
      
        <Routes>
              <Route path="/" exact element={<HomePage/>} />
              <Route path="/homescreen" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
