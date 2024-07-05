import { Link } from "react-router-dom";
import Image from "../assets/background.png";

function Home() {
  return (
    <>
      <div className="bg-slate-100 pt-8">
        <h1 className="p-8 text-4xl text-yellow-500">
          Welcome to DCommerce, your one-stop shop for all your product needs!
        </h1>
      </div>

      <div className="relative pt-4">
        <img src={Image} className="w-full" />
        <h1 className="text-blue-500 text-4xl absolute bottom-1/2 right-1/4">
          Sale up to 50% off
        </h1>
        <Link to="/main" className="p-3 bg-yellow-300 rounded-3xl text-slate-700 absolute bottom-1/4 right-1/3">
          Show Products
        </Link>
      </div>

      <div className="flex flex-col py-8 pt-40 justify-center items-center bg-white">
        <h1 className="text-2xl mb-4">Subscribe to Newsletter</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="w-1/3 p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="p-3 bg-yellow-300 rounded-3xl">Subscribe</button>
      </div>
    </>
  );
}

export default Home;
