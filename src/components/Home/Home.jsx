import { Link } from "react-router-dom";
import Image from "../../assets/background.png";
import { Suspense } from "react";

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        <Link
          to="/main"
          className="p-3 bg-orange-400 rounded-3xl text-white absolute bottom-1/4 right-1/3"
        >
          Show Products
        </Link>
      </div>

      <div className="flex flex-col py-8 pt-40 justify-center items-center bg-white">
        <h1 className="text-2xl mb-4">Subscribe to Newsletter</h1>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-1/3 p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="p-3 bg-orange-400 text-white rounded-3xl">
          Subscribe
        </button>
      </div>
    </Suspense>
  );
}

export default Home;
