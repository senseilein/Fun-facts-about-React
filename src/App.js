import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom"; // add /client in react18

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="react logo" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© Scrimba code playground. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

// ReactDOM.render(navbar, document.getElementById("root")) before
// ReactDOM.createRoot(document.getElementById("root")).render(navbar) now
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

export default App;
