import './App.css';
import Login from './pages/LoginSignup/Login'; 
import Signup from './pages/LoginSignup/Signup';  
import {Routes, Route} from "react-router-dom";
import About from './pages/About';
import VerifyPage from './pages/VerifyPage';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div>
       <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/verify" element={<PrivateRoute><VerifyPage /></PrivateRoute>} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    </div>
  );
}

export default App;
