import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
import image6 from "../../assets/images/banner/6.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
const Header = () => {
  return (
    <div className="mt-8 ">
      <div className="carousel w-full rounded-md ">
        <div
          id="slide1"
          className="carousel-item relative w-full  lg:lg:max-h-[650px] h-screen "
        >
          <img src={image5} className="w-full" />
          <div className="absolute flex justify-end  left-2 right-5 bottom-16 gap-8 mr-4 ">
            <a href="#slide6" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none text-white btn-circle">
             <IoIosArrowRoundBack size={30}/>
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-none text-white">
              <IoIosArrowRoundForward size={30}/>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-2/3 w-9/12 lg:px-16 px-4 lg:space-y-6 space-y-2 absolute text-white bg-gradient-to-r from-black h-full">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex justify-between gap-6"> 
           <button className="btn bg-[#FF3811] hover:rounded-sm hover:outline-[#FF3811] hover:bg-transparent text-white font-bold rounded-sm outline-none border-none lg:lg:text-lg">Discover More</button>
            <button className="btn rounded-sm outline-[#FF3811] hover:bg-[#FF3811] bg-transparent text-white font-bold lg:lg:text-lg">Latest Project</button>
           </div>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full  lg:max-h-[650px]"
        >
          <img src={image2} className="w-full" />
          <div className="absolute flex justify-end  left-2 right-5 bottom-16 gap-8 mr-4 ">
            <a href="#slide1" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none text-white btn-circle">
             <IoIosArrowRoundBack size={30}/>
            </a>
            <a href="#slide3" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-none text-white">
              <IoIosArrowRoundForward size={30}/>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-2/3 w-9/12 lg:px-16 px-6 space-y-6 absolute text-white bg-gradient-to-r from-black h-full">
            <h1 className="lg:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex justify-between gap-6"> 
           <button className="btn bg-[#FF3811] hover:rounded-sm hover:outline-[#FF3811] hover:bg-transparent text-white font-bold rounded-sm outline-none border-none lg:text-lg">Discover More</button>
            <button className="btn rounded-sm outline-[#FF3811] hover:bg-[#FF3811] bg-transparent text-white font-bold lg:text-lg">Latest Project</button>
           </div>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full  lg:max-h-[650px]"
        >
          <img src={image3} className="w-full" />
          <div className="absolute flex justify-end  left-2 right-5 bottom-16 gap-8 mr-4 ">
            <a href="#slide2" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none text-white btn-circle">
             <IoIosArrowRoundBack size={30}/>
            </a>
            <a href="#slide4" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-none text-white">
              <IoIosArrowRoundForward size={30}/>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-2/3 w-9/12 lg:px-16 px-6 space-y-6 absolute text-white bg-gradient-to-r from-black h-full">
            <h1 className="lg:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex justify-between gap-6"> 
           <button className="btn bg-[#FF3811] hover:rounded-sm hover:outline-[#FF3811] hover:bg-transparent text-white font-bold rounded-sm outline-none border-none lg:text-lg">Discover More</button>
            <button className="btn rounded-sm outline-[#FF3811] hover:bg-[#FF3811] bg-transparent text-white font-bold lg:text-lg">Latest Project</button>
           </div>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full  lg:max-h-[650px]"
        >
          <img src={image4} className="w-full" />
          <div className="absolute flex justify-end  left-2 right-5 bottom-16 gap-8 mr-4 ">
            <a href="#slide3" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none text-white btn-circle">
             <IoIosArrowRoundBack size={30}/>
            </a>
            <a href="#slide5" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-none text-white">
              <IoIosArrowRoundForward size={30}/>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-2/3 w-9/12 lg:px-16 px-6 space-y-6 absolute text-white bg-gradient-to-r from-black h-full">
            <h1 className="lg:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex justify-between gap-6"> 
           <button className="btn bg-[#FF3811] hover:rounded-sm hover:outline-[#FF3811] hover:bg-transparent text-white font-bold rounded-sm outline-none border-none lg:text-lg">Discover More</button>
            <button className="btn rounded-sm outline-[#FF3811] hover:bg-[#FF3811] bg-transparent text-white font-bold lg:text-lg">Latest Project</button>
           </div>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full  lg:max-h-[650px]"
        >
          <img src={image1} className="w-full" />
          <div className="absolute flex justify-end  left-2 right-5 bottom-16 gap-8 mr-4 ">
            <a href="#slide4" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none text-white btn-circle">
             <IoIosArrowRoundBack size={30}/>
            </a>
            <a href="#slide6" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-none text-white">
              <IoIosArrowRoundForward size={30}/>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-2/3 w-9/12 lg:px-16 px-6 space-y-6 absolute text-white bg-gradient-to-r from-black h-full">
            <h1 className="lg:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex justify-between gap-6"> 
           <button className="btn bg-[#FF3811] hover:rounded-sm hover:outline-[#FF3811] hover:bg-transparent text-white font-bold rounded-sm outline-none border-none lg:text-lg">Discover More</button>
            <button className="btn rounded-sm outline-[#FF3811] hover:bg-[#FF3811] bg-transparent text-white font-bold lg:text-lg">Latest Project</button>
           </div>
          </div>
        </div>
        <div
          id="slide6"
          className="carousel-item relative w-full  lg:max-h-[650px]"
        >
          <img src={image6} className="w-full" />
          <div className="absolute flex justify-end  left-2 right-5 bottom-16 gap-8 mr-4 ">
            <a href="#slide5" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none text-white btn-circle">
             <IoIosArrowRoundBack size={30}/>
            </a>
            <a href="#slide1" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-none text-white">
              <IoIosArrowRoundForward size={30}/>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-2/3 w-9/12 lg:px-16 px-6 space-y-6 absolute text-white bg-gradient-to-r from-black h-full">
            <h1 className="lg:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex justify-between gap-6"> 
           <button className="btn bg-[#FF3811] hover:rounded-sm hover:outline-[#FF3811] hover:bg-transparent text-white font-bold rounded-sm outline-none border-none lg:text-lg">Discover More</button>
            <button className="btn rounded-sm outline-[#FF3811] hover:bg-[#FF3811] bg-transparent text-white font-bold lg:text-lg">Latest Project</button>
           </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Header;
