import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { Items } from "../../context/CartContext";

const Empty = ({ text,quantatiy, ...props }) => {
  const modalRef = useRef(null);
  const { empty, setEmpty } = useContext(Items);
  return createPortal(
    <>
      <dialog
        className={
            empty
            ? "mt-10 fixed top-20 p-14 flex flex-col items-center gap-6  text-white bg-slate-100"
            : "none"
        }
        {...props}
        ref={modalRef}
      >
        <h1 className=" text-lg text-black">{quantatiy}</h1>
        <section className="flex justify-evenly w-full gap-8">
          <button
            className="  bg-teal-300 p-2 w-full rounded-xl"
            onClick={() => setEmpty((prev) => !prev)}
          >
            {text} 
          </button>
        </section>
      </dialog>
    </>,
    document.getElementById("emptyModal")
  );
};

export default Empty;
