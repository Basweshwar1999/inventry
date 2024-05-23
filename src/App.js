import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Component/Code/Login';
import Home from './Component/Code/Home';
import Navbar from './Component/Code/Navbar';
import About from './Component/Code/About';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar />
          <Routes>
          <Route
                path="/"
                element={
                <LoginPage />  
                }
              />
               <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
