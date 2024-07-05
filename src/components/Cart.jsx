import { useContext, useState, useEffect } from "react";
import { Items } from "../context/CartContext";

export default function Cart() {
  const { state, removeItem } = useContext(Items); 
  const [cartState, setCartState] = useState(state.items.length > 0);

  useEffect(() => {
    setCartState(state.items.length > 0);
  }, [state.items]);

  return (
    <>
      {cartState ? (
        <div className="grid grid-cols-3 w-full gap-8 place-items-center pt-10 pb-10">
          {state.items.map((item,index) => (
            <div className="flex flex-col justify-center pt-2 w-1/2 h-full gap-6 items-center rounded-xl border-zinc-200 border-solid border-2" key={index}>
              <p className="text-center">{item.title}</p>
              <p>Quantitiy  {item.count}</p>
              <img className="w-2/3" src={item.image} alt={item.title} />
              <p>Total Price: {parseInt(item.price* item.count)}$</p>
              <div className="flex flex-row-reverse justify-self-end  gap-6 ">
              <button 
              className="p-3 w-1/2 h-12 bg-gray-400 rounded-3xl text-white"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Remove
              </button>
              <button 
              className="p-3 h-12 w-1/2 bg-orange-600 mb-2 rounded-3xl text-white"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Checkout
              </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center pt-64 pb-64 text-3xl">No Items in Cart</p>
      )}
    </>
  );
}
