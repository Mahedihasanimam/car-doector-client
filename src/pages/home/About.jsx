import about1 from '../../assets/images/about_us/parts.jpg';
import about2 from '../../assets/images/about_us/person.jpg';
const About = () => {
  return (
    <div>
      <div className="hero lg:my-14 my-8">
        <div className="hero-content flex-col lg:gap-24 lg:flex-row  ">
          <div className='relative w-full mb-14'>
          <img
            src={about2}
            className="  rounded-lg shadow-2xl"
          />
          <img className='absolute w-4/6  -bottom-16 -right-8 outline-8 outline-white shadow-lg' src={about1} alt="" />
          </div>
          <div className=''>
            <strong className='text-[#FF3811] font-bold'>About Us</strong>
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold">BWe are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-[#FF3811]  hover:bg-[#FF3811]  text-white font-bold rounded-sm outline-none border-none lg:lg:text-lg mt-6">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
