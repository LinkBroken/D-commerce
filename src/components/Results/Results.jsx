import { useContext, useState } from "react";
import { store } from "../../context/StoreDataContext";
import { Items } from "../../context/CartContext";
import Products from "../Products/Products";
import Modal from "../Modal/Modal";
import Empty from "../EmptyModal/EmptyModal";
import addProduct from "../../helpers/addProduct";
function Results() {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const { storeData } = useContext(store);
  const { search, setModal, setEmpty } = useContext(Items);
  const [itemCount, setItemCount] = useState(0);
  const [priceRange, setPriceRange] = useState(1000);
  const [category, setCategory] = useState(categories);

  function selectCategory(type) {
    setCategory((prev) =>
      [...prev].includes(type)
        ? [...prev].filter((name) => name !== type)
        : [...prev, type]
    );
  }
  return (
    <div className="flex flex-col items-center gap-8 pt-4 min-h-screen">
      <div className="flex flex-row-reverse justify-evenly w-full">
        <div className="flex flex-col items-center  border border-black w-1/6 h-1/2 shadow-sm shadow-black rounded-xl">
          <h1>Price</h1>
          <input
            className=" accent-orange-400"
            min={1}
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            max="200"
            type="range"
          />
          <h2>${priceRange}</h2>
        </div>
        <div className="flex flex-col justify-evenly w-1/4 gap-4 flex-start">
          <section className="flex w-36 justify-evenly">
            <label className="w-3/5">Electronics</label>
            <input
              defaultChecked
              className="w-1/8 accent-green-600"
              type="checkbox"
              value="electronics"
              onClick={() => selectCategory(categories[0])}
            />
          </section>
          <section className="flex w-36 justify-evenly">
            <label className="w-3/5">Men</label>
            <input
              defaultChecked
              className="w-1/8 accent-green-600"
              type="checkbox"
              onClick={() => selectCategory(categories[2])}
            />
          </section>
          <section className="flex w-36 justify-evenly">
            <label className="w-3/5">Women</label>
            <input
              defaultChecked
              type="checkbox"
              onClick={() => selectCategory(categories[3])}
              className="w-1/8 accent-green-600"
            />
          </section>
          <section className="flex w-36 justify-evenly">
            <label className="w-3/5 text-md">Jewlery</label>
            <input
              defaultChecked
              className="w-1/8 accent-green-600"
              type="checkbox"
              onClick={() => selectCategory(categories[1])}
            />
          </section>
        </div>
      </div>
      {[...storeData].length >= 1 ? (
        <div className="pt-10 flex justify-evenly  mb-8">
          <Modal />
          <Empty text={sessionStorage.getItem("token") ? "continue Shopping" : "Sign in to Continue Shopping"} quantatiy={sessionStorage.getItem("token") ? "Select A quantatiy" : "You are not logged in"} />
          <div
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos="fade-right"
            className="grid grid-cols-3 place-items-center gap-6 h-full w-full"
          >
            {[...storeData].map(
              // fix padding issue regarding the products section
              (item, index) =>
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.price < priceRange &&
                category.includes(item.category) && (
                  <Products
                    key={index}
                    className=" hover:scale-105 flex flex-col pt-4 h-96 w-3/6 mb-6  justify-evenly items-center border-zinc-200 border-solid border-2 "
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    imageClass="w-1/2 h-1/2"
                    itemClass="w-3/4 text-md bold mb-6"
                    buttonClass="p-3 text-white bg-orange-400  rounded-3xl"
                    onChange={(e) => setItemCount(e.target.value)}
                    buttonClick={() => {

                      itemCount != 0 ?
                        (() => {
  
                          sessionStorage.getItem("token") ? (() => {
                            addProduct(
                              {
                                title: item.title.trim(),
                                price: item.price * itemCount,
                                image: item.image,
                                description: item.description
                              }
  
                            )
                            setModal(true)
                          })() : setEmpty(true)
                          setItemCount(0)
                        })() : setEmpty(true)
  
                    }}
                  />
                )
            )}
          </div>
        </div>
      ) : (
        <h1 className=" text-3xl text-center">No Results Found</h1>
      )}
    </div>
  );
}

export default Results;
