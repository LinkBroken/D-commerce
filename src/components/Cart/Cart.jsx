import { useEffect, useState } from "react";
import getCart from "../../helpers/getCart";
import Products from "../Products/Products";
export default function Cart() {

  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    getCart(setCartItems)

  }, [])
  console.log(cartItems)
  return (
    <div className="min-h-96 w-3/4">
      {cartItems.map((item, index) => {
        return (
          <Products 
          className=" hover:scale-105 flex flex-col pt-4 h-96 w-3/6 mb-6  justify-evenly items-center border-zinc-200 border-solid border-2 "
          key={index} title={item.name} image={item.image} price={item.price} />
        )
      })}
    </div>

  );
}
