import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import StoreProvider from "./context/StoreDataContext";
import MainSection from "./components/MainSection/MainSection";
import Cart from "./components/Cart/Cart";
import ItemsContextProvider from "./context/CartContext";
import SearchBar from "./components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmazonPay as icon } from "@fortawesome/free-brands-svg-icons";
import Results from "./components/Results/Results";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthContextProvider from "./context/AuthContext";
function App() {
  
  return (
    <>
    <AuthContextProvider>
      <StoreProvider>
        <ItemsContextProvider>
          <Router>
            <Nav className="flex w-1/3 justify-between items-center ">
              <div className="flex flex-row-reverse items-center gap-4 ">
                <h1>D Commerce</h1>
                <FontAwesomeIcon icon={icon} />
              </div>
              <SearchBar
                buttonClass="p-3 bg-orange-400 rounded-3xl"
                inputClass="border-solid border-2 border-black w-full p-1 h-3/4 rounded-2xl text-black text-center"
                type="text"
                className="flex items-center justify-center pt-5 gap-4 pb-5"
                placeholder="Search for something"
              />
            </Nav>
            <Routes>

            </Routes>
            <Routes>

              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/main" element={<MainSection />} />

              <Route path="/results" element={<Results />} />

            </Routes>
          </Router>
        </ItemsContextProvider>
        <Footer />
      </StoreProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
