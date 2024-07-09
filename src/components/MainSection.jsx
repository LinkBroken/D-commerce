import { useContext, useEffect, useState } from "react";
import { store } from "../context/StoreDataContext";
import Products from "./Products";
import { Items } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal/Modal";
function MainSection() {
  const { storeData } = useContext(store);
  const { addItem, setModal } = useContext(Items);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {storeData.length > 0 ? (
        <>
          <Modal />

          <div className="pt-10 flex justify-evenly w-full">
            <div
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
              className="grid grid-cols-3 place-items-center gap-6 h-full w-full"
            >
              {[...storeData].map((item, index) => (
                <Products
                  key={index}
                  className=" hover:scale-105 flex flex-col pt-4 h-96 w-3/6  justify-evenly items-center border-zinc-200 border-solid border-2 "
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  imageClass="w-1/2 h-1/2"
                  itemClass="w-3/4 text-md bold mb-6"
                  buttonClass="p-3 text-white bg-orange-400  rounded-3xl"
                  buttonClick={() => {
                    addItem({ ...item, id: Math.random(), count: itemCount });
                    setModal(true);
                  }}
                  onChange={(e) => setItemCount(e.target.value)}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <h1 className=" text-6xl">Loading ...</h1>
        </div>
      )}
    </>
  );
}

export default MainSection;
