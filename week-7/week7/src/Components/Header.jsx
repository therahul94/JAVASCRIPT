import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <nav>
        <div style={{display:"flex", border: "1px solid black", padding:"5px"}}>
          <Link to="/profile" style={{margin: "5px"}}>Profile</Link>
        </div>
      </nav>
  )
}
