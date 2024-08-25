import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    
    <div className="bottom-0 w-full bg-teal-900 p-4 flex justify-evenly">
      <div className="flex flex-col text-white gap-4 pt-9 ">
        <p>Election</p>
        <p>64 st james boulevard</p>
        <div className="flex justify-between">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <div className="flex flex-col  text-white">
        <p className="p-2 text-2xl">Find Product</p>
        <li>Brownze arnold</li>
        <li>Chronograph blue</li>
        <li>Smart Phones</li>
        <li>Automatic Watch</li>
        <li>Hair Strighteners</li>
      </div>
      <div className="flex flex-col  text-white">
        <p className="p-2 text-2xl">Get Help</p>
        <li>News</li>
        <li>Service</li>
        <li>Our policy</li>
        <li>Custmer Care</li>
        <li>Faqs</li>
      </div>
      <div className="flex flex-col text-white">
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
