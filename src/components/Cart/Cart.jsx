import { useLayoutEffect, useState } from "react";
import getCart from "../../helpers/getCart";
import Products from "../Products/Products";
import removeProduct from "../../helpers/removeProduct";
import Skeleton from "../Skeleton/Skeleton";
export default function Cart() {

  const [cartItems, setCartItems] = useState([])
  const [removed,setRemoved] = useState(false)
  useLayoutEffect(() => {
    getCart(setCartItems)
  },[removed])
  console.log(cartItems)
  return (
    <div className="min-h-[600px] place-items-center  p-8 grid grid-cols-3 gap-8 ">
      {cartItems.length>0? cartItems.map((item, index) => 
        
          <Products
            className=" hover:scale-105 flex flex-col pt-4 h-96 w-1/2 mb-6  justify-evenly items-center border-zinc-200 border-solid border-2 "
            key={index} title={item.name} image={item.image} price={item.price}
            imageClass="w-1/2 h-1/2"
            itemClass="w-3/4 text-md bold mb-6"
            buttonClass=" hidden"
            inputClass="hidden"
          ><button onClick={() => {
            removeProduct(item.name);
            setRemoved(!removed)}}

          >Remove</button></Products>

        
      ): 
      <div className="flex w-full gap-10">
      <Skeleton/>
      <Skeleton/>
      </div>}
    </div>

  );
}
