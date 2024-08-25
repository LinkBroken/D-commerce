import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Items } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX as icon } from "@fortawesome/free-solid-svg-icons/faX";
const RegModal = ({ text, ...props }) => {
  const modalRef = useRef(null);
  const { signUp, setSignUp } = useContext(Items);
  useEffect(() => {
    signUp ? document.getElementById("root").style.filter = "blur(4px)" : document.getElementById("root").style.filter = "blur(0px)"

  }, [signUp])
  return createPortal(
    <>

      <dialog
        autoFocus={false}
        className={
          signUp
            ? "mt-10 fixed top-20  p-8 flex flex-col items-center gap-6  text-white bg-zinc-50 rounded-xl"
            : "none"
        }
        {...props}
        ref={modalRef}
      >
        <section className="flex flex-col  items-center w-full pl-10 pr-10  ">
          <FontAwesomeIcon enableBackground={true} className=" text-red-900" icon={icon} size="2x" />
          <h1
            className=" text-black text-md p-2 w-full rounded-xl"
          >
            {text}
          </h1>
          <button
            className="  bg-red-700 p-2 w-full rounded-xl"
            onClick={() => {
              setSignUp((prev) => !prev);
            }
            }
          >
            close
          </button>
        </section>
      </dialog>
    </>,
    document.getElementById("RegModal")
  );
};

export default RegModal;
