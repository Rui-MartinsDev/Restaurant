import './App.css';
import Header from './Header';
import Main from './Main';
import Homepage from './Homepage';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div>
      <Header/>
      <Routes>
          <Route path='/dishes' element={<Main/>} />
          <Route path='/' element={<Homepage/>} />
          <Route path='about' element={<Footer/>} />
        </Routes>
    </div>
    </>
  );
  
}

export default App;
