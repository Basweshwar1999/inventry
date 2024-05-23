import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Component/Code/Login';
import HomePage from './Component/Code/Home';
import About from './Component/Code/About';
import Contact from './Component/Code/Contact';
import Projects from './Component/Code/Projects';
import Navbar from './Component/Code/Navbar';
import Footer from './Component/Code/Footer';
import Profile from './Component/Code/Profile'; // Assuming you have a ProfileSidebar component
import CreateAccount from './Component/Code/CreateAccount'; // Assuming you have a ProfileSidebar component
import logoImage from './Component/Images/download.png'; // Replace with your logo path

import './Component/Styles/Style.css';

// Authentication Context (Optional)
const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: () => {} });

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check for specific username and password
    if (username === 'basweshwar' && password === 'Rutik@1902') {
      // Login successful
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <div className="app-container"> {/* Container for better styling */}
          {isLoggedIn && <Navbar />} {/* Conditionally render navbar */}
          <div className="body" style={{backgroundImage:logoImage}}> {/* Container for body content */}
            <Routes>
              <Route
                path="/login"
                element={
                <LoginPage />
                //     <LoginPage
                //       onLogin={handleLogin}
                //       setUsername={setUsername}
                //       setPassword={setPassword}
                //     />
                 
                }
              />
              <Route
                path="/"
                element={
                  isLoggedIn ? (
                    <HomePage />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/CreateAccount" element={<CreateAccount />} />

            </Routes>
          </div>
          <Footer style={{ flexGrow: 1 }} /> {/* Footer with flexGrow: 1 */}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  ); 
}

export default App;
export { AuthContext };
