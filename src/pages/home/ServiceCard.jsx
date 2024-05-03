import { IoIosArrowRoundForward } from "react-icons/io";
const ServiceCard = ({ item }) => {
  const { title, img, price, decription } = item;

  return (
    <div className="card card-compact bg-base-100 shadow-xl   border-2 border-solid border-gray-200">
      <figure className="p-4 ">
        <img className="rounded-lg"
          src={img}
          alt="car"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#444444] text-2xl font-bold">{title}</h2>
        <div className="card-actions justify-end">
        <p className="text-lg font-bold text-[#FF3811]">Price : ${price}</p>
          <button className="btn text-[#FF3811]">
            <IoIosArrowRoundForward size={30}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
