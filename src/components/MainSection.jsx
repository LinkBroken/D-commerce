import { useContext, useEffect } from "react";
import { store } from "../context/StoreDataContext";
import Products from "./Products";
import { Items } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal/Modal";
function MainSection() {
  const { storeData } = useContext(store);
  const { addItem,modal, setModal } = useContext(Items);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <Modal   />

      <div className="pt-10 flex justify-evenly w-screen">
        <div
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos="fade-right"
          className="grid grid-cols-3 place-items-center gap-6 w-full"
        >
          {storeData.map((item, index) => (
            <Products
              key={index}
              className="flex flex-col pt-8 h-96 w-3/4  justify-evenly items-center border-zinc-200 border-solid border-2"
              image={item.image}
              price={item.price}
              // title={item.title}
              imageClass="w-1/3"
              buttonClass="p-3 bg-yellow-300 rounded-3xl"
              buttonClick={() => {
                addItem({ ...item, id: index });
                // setNavi(true);
                console.log(modal)
                setModal(true)
                
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainSection;
