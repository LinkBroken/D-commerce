import { useContext, useEffect, useState } from "react";
import { store } from "../context/StoreDataContext";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { Items } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

function MainSection() {
  const { storeData } = useContext(store);
  const { addItem } = useContext(Items);
  const [navi, setNavi] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navi ? setTimeout(() => navigate("/cart"), 1000) : "null";
  }, [navi, navigate]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="pt-10 flex justify-evenly w-full">
      
        <div
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos="fade-right"
          className="grid grid-cols-3 place-items-center gap-6 w-4/5"
        >
          {storeData.map((item, index) => (
            <Products
              key={index}
              className="flex flex-col pt-8 h-96 w-40 justify-evenly items-center border-zinc-200 border-solid border-2"
              image={item.image}
              price={item.price}
              // title={item.title}
              imageClass="w-24"
              buttonClass="p-3 bg-yellow-300 rounded-3xl"
              buttonClick={() => {
                addItem({ ...item, id: index });
                setNavi(true);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainSection;
