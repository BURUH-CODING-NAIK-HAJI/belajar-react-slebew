import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar_wrapper">
          <div className="brand">
            <h1>MusYan News</h1>
          </div>
          <menu className="menu">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/Profile">
              Profile
            </Link>
            <Link className="link" to="/Blog">
              News
            </Link>
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </menu>
        </div>
      </nav>
      <main className="container">
        <div className="hero">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
