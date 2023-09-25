import footerLogo from './imgs/footerLogo.png'
import './App.css';
import Header from './Header';


export default function Footer(){
  return(
    <footer>
      
      <div className="container">
        <div className="footer-content">

          <div className="footer-icon">
            <img src={footerLogo} alt='Logo'></img>
          </div>
          <div className="footer-columns">
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li><a href="null">Home</a></li>
              <li><a href="null">About</a></li>
              <li><a href="null">Menu</a></li>
              <li><a href="null">Reservations</a></li>
              <li><a href="null">Order Online</a></li>
              <li><a href="null">Login</a></li>
      </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <address>
              123 Main Street<br />
              City, State, Zip<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </address>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Litte Lemon Restaurant
        </div>
      </div>
    </footer>
  )
}