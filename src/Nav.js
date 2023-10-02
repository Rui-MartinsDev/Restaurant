import './App.css';
import { Link } from 'react-router-dom';

export default function Nav(){
  return(
    <nav >
        <Link to='/' className='nav-bar'>Home</Link>
        <Link to='about' className='nav-bar'>About</Link>
        <Link to='dishes' className='nav-bar'>Menu</Link>
        <Link to='booking' className='nav-bar'>Book</Link>
        <a className='nav-bar' href="null">Order Online</a>
        <a className='nav-bar' href="null">Login</a>
    </nav>
  )
}