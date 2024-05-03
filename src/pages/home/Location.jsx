import { BsCalendar2DateFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
const Location = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center items-center bg-[#151515] text-white h-56 my-8">
      <div className="flex justify-center gap-4">
        <BsCalendar2DateFill className="text-[#FF3811]" size={35}></BsCalendar2DateFill>
        <div>
          <p>We are open monday-friday</p>
          <strong>7:00 am - 9:00 pm</strong>
        </div>

      </div>
      <div className="flex justify-center gap-4">
        <FiPhoneCall className="text-[#FF3811]" size={35}></FiPhoneCall>
        <div>
          <p>Have a question?</p>
          <strong>+2546 251 2658</strong>
        </div>

      </div>
      <div className="flex justify-center gap-4">
        <MdLocationOn className="text-[#FF3811]" size={35}></MdLocationOn>
        <div>
          <p>Need a repair? our address</p>
          <strong>7Liza Street, New York</strong>
        </div>

      </div>

    </div>
  );
};

export default Location;
