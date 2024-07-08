import { useContext } from "react";
import { store } from "../context/StoreDataContext";
import { Items } from "../context/CartContext";
import Products from "./Products";

function Results() {
  const { storeData } = useContext(store);
  const {search,addItem,setModal,itemCount} = useContext(Items)

  return (
    <div className="pt-10 flex justify-evenly w-screen">
        <div
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos="fade-right"
          className="grid grid-cols-3 place-items-center gap-6 h-full w-full"
        >
          {[...storeData].map((item, index) => {
            {item.includes(search)&&<Products
              key={index}
              className=" hover:scale-105 flex flex-col pt-4 h-96 w-3/6  justify-evenly items-center border-zinc-200 border-solid border-2 "
              image={item.image}
              price={item.price}
              title={item.title}
              imageClass="w-1/2 h-1/2"
              itemClass="w-3/4 text-md bold mb-6"
              buttonClass="p-3 text-white bg-orange-400  rounded-3xl"
              buttonClick={() => {
                addItem({...item, id:index, count: itemCount});
                console.log({...item})
                setModal(true);

                
              }}
              onChange={(e)=>setItemCount(e.target.value)}
            />}
})}
        </div>
        </div>
  )
}

export default Results