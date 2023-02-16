import './App.css';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import About from "./pages/About";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user)
    })

  }, [auth])

  if(loadingUser) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={ user }>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
