import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard/dashboard.jsx";
import Navigation from "./Components/Navigation/navigation.jsx";
import Home from "./Pages/Home/home.jsx";

function App() {

  return (
      <>
          <Router>
              <Navigation/>
              <Routes>
                  <Route path="/" index element={<Home/>} />
                  <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
          </Router>
      </>
  )
}

export default App
