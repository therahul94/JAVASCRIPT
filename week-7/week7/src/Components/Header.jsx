import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <nav>
        <div style={{display:"flex", border: "1px solid black", padding:"5px"}}>
          <Link to="/profile" style={{margin: "5px"}}>Profile</Link>
          <Link to="/background-changer" style={{margin: "5px"}}>Background-Changer</Link>
          <Link to="/paragraph" style={{margin: "5px"}}>Paragraph</Link>
          <Link to="/github-card" style={{margin: "5px"}}>GitHub-Card</Link>
        </div>
        
      </nav>
  )
}
