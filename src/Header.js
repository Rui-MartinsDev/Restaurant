import logo from './imgs/logo.png';
import Nav from './Nav';
import './App.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className='App-header'>
      <Link to='/'><img src={logo} alt='Logo' style={{width:'300px', height:'auto'}}></img></Link>
      <Nav/>
    </header>
  )
}
