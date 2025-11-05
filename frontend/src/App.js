import './App.css';
import Login from './pages/LoginSignup/Login'; 
import Signup from './pages/LoginSignup/Signup';  
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
       <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
