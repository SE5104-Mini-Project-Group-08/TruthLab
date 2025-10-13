import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* ---------- NAVBAR ---------- */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="TruthLab Logo" />
          <h1>TruthLab</h1>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">History</a>
          <a href="#">FAQ</a>
        </nav>
        <div className="nav-buttons">
          <a href="./pages/LoginSignup/Login.jsx">
          <button className="login">Log in</button>
          </a>
          <a href="./pages/LoginSignup/Signup.jsx">
          <button className="signup">Sign up</button>
          </a>
        </div>
      </header>

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <h1>
          No More Fake <br /> Verify News With Confidence
        </h1>
        <p>
          TRUTHLAB's AI-powered platform helps you detect fake news and verify
          information with cutting-edge technology.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="how-it-works">
        <h2>How TRUTHLAB Works</h2>
        <p>
          Our AI-powered platform uses advanced algorithms to verify information
          across multiple sources.
        </p>

        <div className="work-cards">
          <div className="card">
            <h3>Source Analysis</h3>
            <p>
              We analyze the credibility of the source by examining its history,
              reputation, and previous accuracy.
            </p>
          </div>

          <div className="card">
            <h3>Content Verification</h3>
            <p>
              Our AI cross-references information with thousands of reliable
              sources to verify facts and claims.
            </p>
          </div>

          <div className="card">
            <h3>Credibility Score</h3>
            <p>
              Get a clear credibility score that helps you determine the
              reliability of information quickly.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>Hear from people who use TRUTHLAB to verify information.</p>

        <div className="testimonial-cards">
          <div className="t-card">
            <h4>Sarah Johnson</h4>
            <p className="role">Journalist</p>
            <p>
              “TRUTHLAB has become an essential tool in my reporting workflow.
              It helps me verify facts quickly and ensure my stories are
              accurate.”
            </p>
          </div>

          <div className="t-card">
            <h4>Michael Chen</h4>
            <p className="role">Teacher</p>
            <p>
              “TRUTHLAB makes it easy to verify the credibility of news articles
              before sharing them with students.”
            </p>
          </div>

          <div className="t-card">
            <h4>Aisha Patel</h4>
            <p className="role">Social Media Manager</p>
            <p>
              “It helps me quickly verify online claims, so I can share only
              accurate content with my audience.”
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="cta">
        <h2>Ready to verify with confidence?</h2>
        <p>Start using TRUTHLAB today and never fall for fake news again.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <img src="/logo.png" alt="TruthLab Logo" />
            <p className="brand">TruthLab</p>
            <small>No More Fake</small>
          </div>
          <div>
            <h4>Account</h4>
            <ul>
              <li><a href="#">Sign up</a></li>
              <li><a href="#">Log in</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2023 TRUTHLAB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;      