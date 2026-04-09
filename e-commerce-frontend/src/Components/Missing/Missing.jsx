import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div class='missing'>
        <div>Page Not Found</div>
        <Link to='/' >Go Back to Home</Link>
    </div>
  )
}

export default Missing