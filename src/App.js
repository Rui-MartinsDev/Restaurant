import './App.css';
import Header from './Header';
import Menu from './Menu';
import Homepage from './Homepage';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import BookingForm from './BookingPage';


function App() {
  return (
    <>
    <div>
      <Header/>
      <Routes>
          <Route path='dishes' element={<Menu/>} />
          <Route path='/' element={<Homepage/>} />
          <Route path='about' element={<Footer/>} />
          <Route path='booking' element={<BookingForm/>}/>
        </Routes>
    </div>
    </>
  );
  
}

export default App;
