import wink from "../../assets/images/winking.png";
import eating from "../../assets/images/eating.png";
import { Github, LinkedIn } from "../../assets/reusableSvg";
import StarAnimation from "../animations/StarAnimation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate how much the image should be translated based on the scroll position.
  // Adjust the factor to control the speed of the movement.
  const translateY = scrollY * 0.1;
  return (
    <div className="w-full h-full grid lg:grid-cols-3 mt-[51px] gap-[24px]">
      <div className="parent-container lg:h-[457px]  lg:col-span-2 bg-neutralDefault lg:px-[58px] lg:py-[51px] p-[28px] overflow-hidden rounded-[30px] relative">
        <div className="glow1 absolute z-[2] "></div>
        <div className="w-full  flex lg:flex-row flex-col lg:justify-between lg:gap-y-0 gap-y-[20px]">
          <div className="flex gap-x-[24px]">
            <div className="w-[58px] h-[58px] bg-blueDefault z-[10] rounded-full flex justify-center items-center ">
              <img src={wink} alt="" className="mr-[5px] mt-[4px]" />
            </div>
            <div className="">
              <h4 className="text-[20px]">Hi, I'm Omobolaji</h4>
              <p className="text-[14px] text-white/40">Front-end developer</p>
            </div>
          </div>
          <div className="flex gap-x-[14px]">
            <a
              href="https://www.linkedin.com/in/omobolaji-ogunsola-4b8368275/"
              target="_blank"
              className="social hover:scale-110"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/Honourable1234"
              target="_blank"
              className="social hover:scale-110"
            >
              <Github />
            </a>
            {/* <a
              href="https://twitter.com/Shefihuuu"
              className="social hover:scale-110"
              target="_blank"
            >
              <Twitter />
            </a> */}
          </div>
        </div>
        <div className="lg:mt-[40px] mt-[20px]">
          <h2 className="max-w-[600px] mb-[24px] leading-[120%] lg:text-[56px] text-[38px]">
            Design modern, user focused products.
          </h2>
          <p className="max-w-[463px] text-white/60">
            I'm a creative front-end developer passionate about converting ideas
            into standard and scalable products.
          </p>
        </div>
      </div>
      <div className="  overflow-hidden h-[457px] rounded-tr-[50px] rounded-bl-[50px] rounded-[30px] bg-blueDefault relative flex justify-center ">
        <img
          src={eating}
          alt=""
          className="eating-image w-[80%]"
          style={{ transform: `translateY(${translateY}px)` }}
        />
        <div className="card-hello-right-circles">
          <div className="card-hello-right-circle" />
          <div className="card-hello-right-circle" />
          <div className="card-hello-right-circle" />
          <div className="card-hello-right-circle" />
          <div className="card-hello-right-circle" />
        </div>
        <div className="absolute top-0 left-0 ">
          <StarAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
