import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import About from "./pages/About";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className="App">
      <AuthProvider>
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
