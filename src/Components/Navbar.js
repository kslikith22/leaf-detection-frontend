import "../index.css"
import { Link } from "react-router-dom"
export default function Navbar(){
  

    return  <nav className="navbar">
    <Link to="/" className="brand-logo">
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
}