import React from 'react'

const Navbar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '2rem', marginBottom:'2rem', background: '#ddd'}}>
      <h1>My Navbar</h1>
      <ul style={{display: 'flex', gap: '1rem', listStyle: 'none'}}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar