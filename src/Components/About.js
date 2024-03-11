import React from "react";
import { Link } from "react-router-dom"


const About = () => {
  const navstyle = {
    padding: "30px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "30.5px",
  };

  const brandLogoStyle = {
    textDecoration: "none",
    fontSize: "46px",
  };

  return (
    <div
      id="backimg"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundPosition: "center",
        backgroundSize: "100%",
        height: "729.60px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav style={navstyle}>
        <Link to="/" className="brand-logo" style={brandLogoStyle}>
          Nature
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <center
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", textTransform: "uppercase" }}>
          About Us
        </h1>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
         // contants
        </h3>
      </center>
      <footer
        style={{ marginTop: "2rem", textAlign: "center", color: "white", marginTop: "330px" }}
      >
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Nature Image Uploader. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;