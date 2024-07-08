import './App.css';
import { BrowserRouter as Router, Routes, Route, redirect,useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import StoreProvider from './context/StoreDataContext';
import MainSection from './components/MainSection';
import Cart from './components/Cart';
import ItemsContextProvider, { Items } from './context/CartContext';
import SearchBar from './components/SearchBar';
import { useRef, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmazonPay as icon } from '@fortawesome/free-brands-svg-icons';
import Modal from './components/Modal/Modal';
import Results from './components/Results';
function App() {
  const searchRef = useRef();
  const modalRef = useRef(null);
  const {setSearch} = useContext(Items);
  // const navigate = useNavigate();

  return (
    <>
    <StoreProvider>
      <ItemsContextProvider>
      <Router>
        <Nav className="flex w-1/3 justify-between items-center ">
          <div className='flex flex-row-reverse items-center gap-4 '>
            <h1>D Commerce</h1>
            <FontAwesomeIcon icon={icon}/>
          </div>
        <SearchBar
        buttonClick={()=>{ 
          // setSearch(searchRef.current.value);
          // navigate("/results")
          console.log(searchRef.current.value)
        }}
        buttonClass="p-3 bg-orange-400 rounded-3xl"
        inputClass="border-solid border-2 border-black w-full p-1 rounded-2xl text-black"
        type="text"
        ref={searchRef}
        className="flex items-center justify-center pt-5 gap-4 pb-5"
        placeholder="Search for something"
      />
        </Nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/main" element={<MainSection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </Router>
      </ItemsContextProvider>
      <Footer/>
    </StoreProvider>
    </>
  );
}

export default App;
