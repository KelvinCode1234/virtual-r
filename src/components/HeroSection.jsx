import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="felx flex-col items-center mt-5 lg:mt-20">
      <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual-R build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-10 text-center text-neutral-500 max-w-4xl text-sm sm:text-lg">
          Unleash your creativity and build your VR app with ease. Start now and
          bring your ideas to life!
        </p>
      </div>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-sm"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documetation 
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video1} type="video/mp4"/>
          Your browser does not support the video tag. 
        </video> 
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4"/>
          Your browser does not support the video tag. 
        </video> 
      </div>
    </div>
  );
};

export default HeroSection;
