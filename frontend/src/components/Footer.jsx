import React from "react";
import logo from 'D:/React/mini_project/src/assets/Logo/Logo.png';
import './css/footer.css';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        <div>
          <img src={logo} alt="TruthLab" className="h-6 mb-2" />
          <p className="text-gray-400">NO MORE FAKE</p>
          <p className="text-gray-500 text-xs mt-4">© 2025 TruthLab. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Sign up</a></li>
            <li><a href="#">Log in</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Pages</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
