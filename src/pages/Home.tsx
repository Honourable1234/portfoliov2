import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Works from "../components/home/Works";

const Home = () => {
  return (
    <div className="w-full lg:px-0 mb-[40px] px-[10px]">
      <Hero />
      <Works />
      <Contact />
    </div>
  );
};

export default Home;
