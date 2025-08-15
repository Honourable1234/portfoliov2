const Navbar = () => {
  const handleLinkClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-[96px] flex justify-between items-end">
      <div className="lg:w-[30%] w-full flex lg:flex-row flex-col lg:justify-start justify-center">
        <a
          href="#"
          onClick={() => handleLinkClick("skills")}
          className="text-white lg:text-left text-center text-[24px]"
        >
          Omobolaji, <span className="text-white/25">Front-end</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1UjljSMx7JObMcCOTTYhW0diApFEE24KK50EHBk-0_Vo/edit?usp=sharing"
          target="_blank"
          className="text-center lg:hidden hover:text-white/20 transition-colors  flex text-white/25   p-[10px] justify-center"
        >
          Resume
        </a>
      </div>
      <ul className="lg:flex hidden gap-x-[24px] text-[24px]  text-white/25">
        <li>
          <a
            href="https://docs.google.com/document/d/1UjljSMx7JObMcCOTTYhW0diApFEE24KK50EHBk-0_Vo/edit?usp=sharing"
            target="_blank"
            className="transition-colors hover:text-white/20 "
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className="transition-colors hover:text-white/20 "
            href="#skills"
            onClick={() => handleLinkClick("skills")}
          >
            Works
          </a>
        </li>
        <li>
          <a
            className="transition-colors hover:text-white/20 "
            onClick={() => handleLinkClick("contact")}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
