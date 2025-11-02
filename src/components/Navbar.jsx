import logo from 'D:/React/mini_project/src/assets/Logo/Logo.png';  
import './css/navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="TruthLab" className="h-6" />
            </div>

            <div className="space-x-6 text-sm">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="active hover:text-gray-300">Verify</a>
              <a href="#" className="hover:text-gray-300">About</a>
              <a href="#" className="hover:text-gray-300">History</a>
              <a href="#" className="hover:text-gray-300">FAQ</a>
            </div>

            <div className="space-x-4 flex">
                <a href="#" className='loginbtn'>Log in</a>
              
                <a href="#" className='signUpbtn'>
                  Sign up
                </a>
              
              
            </div>
          </nav>
    </div>
    
  );
}

export default Navbar;
