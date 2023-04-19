import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to='/student'>Student Signup/Login</Link><br/>
        <Link to='/proctor'>Proctor Signup/Login</Link><br/>
        <Link to='/ngo'>NGO Signup/Login</Link><br/>
    </div>
  )
}

export default  Home