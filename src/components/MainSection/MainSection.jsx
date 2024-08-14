import { useContext, useState, useEffect } from "react";
import { store } from "../../context/StoreDataContext";
import Products from "../Products/Products";
import { Items } from "../../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "../Modal/Modal";
import Skeleton from "../Skeleton/Skeleton";
import addProduct from "../../helpers/addProduct"
import Empty from "../EmptyModal/EmptyModal";
function MainSection() {
  const { storeData } = useContext(store);
  const { setModal, setEmpty } = useContext(Items);
  const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    AOS.init();

  }, []);
  return (
    <>

      {storeData.length > 0 ? (
        <>
          <Modal />
          <Empty text={sessionStorage.getItem("token") ? "continue Shopping" : "Sign in to Continue Shopping"} quantatiy={sessionStorage.getItem("token") ? "Select A quantatiy" : "You are not logged in"} />
          {/* increase font size*/}
          <div className="pt-10 flex justify-evenly w-full ">
            <div
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
              className="grid grid-cols-3 place-items-center gap-6 h-full w-full"
            >
              {[...storeData].map((item, index) => (
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
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className=" mt-20 flex justify-evenly w-screen min-h-screen gap-11">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
    </>
  );
}

export default MainSection;
