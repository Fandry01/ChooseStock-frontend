import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard/dashboard.jsx";

function App() {

  return (
      <>
          <Router>
              <Routes>
                  <Route index element={<Dashboard />} />
              </Routes>
          </Router>
      </>
  )
}

export default App
