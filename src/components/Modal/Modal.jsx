import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Items } from "../../context/CartContext";
import { faCheck as icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ ...props }) => {
  const modalRef = useRef(null);
  const { modal, setModal } = useContext(Items);
  return createPortal(
    <>
      <dialog
        className={
          modal
            ? "mt-10 fixed top-20 p-14 flex flex-col items-center gap-4 rounded-xl text-white bg-slate-100"
            : "none"
        }
        {...props}
        ref={modalRef}
      >
        <FontAwesomeIcon size="2x"  icon={icon} />

        <h1 className="text-black">The Product added succesfully</h1>
        <section className="flex justify-evenly w-full">
          <Link to="/cart" className=" bg-blue-400 p-2 rounded-xl">
            Checkout
          </Link>
          <button
            className=" bg-red-400 p-2 rounded-xl"
            onClick={() => setModal((prev) => !prev)}
          >
            Exit
          </button>
        </section>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
