import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import Button from '../button/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='navbar'>
      <div className='profile'>
        <Link to={'/'}>
        <div className="profile-img-box">
        <FaUserLarge />
        </div></Link>
        <h2>John Wick</h2>
        
      </div>
      <form onSubmit={handlesubmit} className='search-box'>
        <input type="text" placeholder='John Wick'/>
      <Button name='Search'/>
      </form>
    </div>
  )
}

export default Navbar
