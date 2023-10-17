import NavbarMain from './navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './footer/Footer';
import Map from './pages/Map';
import ScrollToTop from './utils/ScrollToTop';
import Pc from './pages/Pc';
import Laptops from './pages/Laptops';
import Components from './pages/Components';
import ComputerOffice from './pages/ComputerOffice';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  return (
      <div className='font-[Arial] text-violet-100 bg-[#1d1d1d]'>
        <Router>
          <ScrollToTop />
          <NavbarMain />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pc' element={<Pc />}/>
              <Route path='/laptops' element={<Laptops />}/>
              <Route path='/components' element={<Components />}/>
              <Route path='/computer&office' element={<ComputerOffice />}/>
              <Route path='/map' element={<Map />}/>
              <Route path='/signIn' element={<SignIn />}/>
              <Route path='/signUp' element={<SignUp />}/>
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App
