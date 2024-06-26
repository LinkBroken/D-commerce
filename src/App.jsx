import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import StoreProvider from './context/StoreDataContext';
import MainSection from './components/MainSection';
import Cart from './components/Cart';
import ItemsContextProvider from './context/CartContext';
import SearchBar from './components/SearchBar';
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmazonPay as icon } from '@fortawesome/free-brands-svg-icons';
function App() {
  const searchRef = useRef();
  return (
    <StoreProvider>
      <ItemsContextProvider>
      <Router>
        <Nav className="flex w-1/3 justify-between items-center ">
          <div className='flex flex-row-reverse items-center gap-4 '>
            <h1>D Commerce</h1>
            <FontAwesomeIcon icon={icon}/>
          </div>
        <SearchBar
        buttonClass="p-3 bg-yellow-300 rounded-3xl"
        inputClass="border-solid border-2 border-black w-full p-1 rounded-2xl text-black"
        type="text"
        ref={searchRef}
        className="flex items-center just pt-5 gap-4 pb-5"
        placeholder="Search for something"
      />
        </Nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/main" element={<MainSection />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ItemsContextProvider>
      <Footer/>
    </StoreProvider>
  );
}

export default App;
