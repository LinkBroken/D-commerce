import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className=" bg-teal-100 p-4 flex justify-evenly">
      <div className="flex flex-col text-blue-500 gap-4 pt-9 ">
        <p>Election</p>
        <p>64 st james boulevard</p>
        <div className="flex justify-between">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <div className="flex flex-col  text-blue-500">
        <p className="p-2 text-2xl">Find Product</p>
        <li>Brownze arnold</li>
        <li>Chronograph blue</li>
        <li>Smart Phones</li>
        <li>Automatic Watch</li>
        <li>Hair Strighteners</li>
      </div>
      <div className="flex flex-col  text-blue-500">
        <p className="p-2 text-2xl">Get Help</p>
        <li>News</li>
        <li>Service</li>
        <li>Our policy</li>
        <li>Custmer Care</li>
        <li>Faqs</li>
      </div>
      <div className="flex flex-col text-blue-500">
        <p className="p-2 text-2xl">About Us</p>
        <li>News</li>
        <li>Service</li>
        <li>Our policy</li>
        <li>Custmer Care</li>
        <li>Faqs</li>
      </div>
    </div>
  );
}

export default Footer;
