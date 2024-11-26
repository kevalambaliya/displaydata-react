import React from 'react'
import { Link } from 'react-router-dom'
import "../css/index.css"

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/product" className="link">Product</Link>
    </div>
  )
}

export default Navbar
