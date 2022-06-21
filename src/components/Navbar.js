import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
        <nav>

            <div className='logo'>
                <h1>Gada-Health</h1>
            </div>


            <ul className='ul-items'>
                <li className='li-items'>
                    {/* <Link to='/Home'>Home</Link> */}
                    <Link to='/Employee'>Employee</Link>
                    <Link to='/Facility'>Facility</Link>
                    <Link to='/Patient'>Patient</Link>
                </li>
            </ul>
           

        </nav>

    </div>
  )
}

export default Navbar