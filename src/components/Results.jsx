import { useContext, useState } from "react";
import { store } from "../context/StoreDataContext";
import { Items } from "../context/CartContext";
import Products from "./Products";
import Modal from "./Modal/Modal";

function Results() {
  const { storeData } = useContext(store);
  const { search, addItem, setModal } = useContext(Items);
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="pt-10 flex justify-evenly w-screen">
      <Modal />
      <div
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos="fade-right"
        className="grid grid-cols-3 place-items-center gap-6 h-full w-full"
      >
        {[...storeData].map(
          (item, index) =>
            item.title.toLowerCase().includes(search.toLowerCase()) && (
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
                  addItem({ ...item, id: index, count: itemCount });
                  console.log({ ...item });
                  setModal(true);
                }}
                onChange={(e) => setItemCount(parseInt(e.target.value))}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Results;
