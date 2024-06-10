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
        <div className="grid grid-cols-2 gap-8 place-items-center pt-10 pb-10">
          {state.items.map((item,index) => (
            <div className="flex flex-col pt-2 h-96 w-40 justify-evenly items-center border-zinc-200 border-solid border-2" key={index}>
              {/* <p>{item.title}</p> */}
              <p>{item.price}$</p>
              <img src={item.image} alt={item.title} />
              <button 
              className="p-3 bg-yellow-300 rounded-3xl"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center pt-64 pb-64 text-3xl">No Items in Cart</p>
      )}
    </>
  );
}
