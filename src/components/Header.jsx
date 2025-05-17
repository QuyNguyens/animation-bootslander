import { useEffect, useState } from "react";
import { useActiveSection } from "../contexts/ActiveSectionContext";
const menuItems = ["Home", "About", "Features", "Gallery", "Team", "Price", "Contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`sticky top-0 z-10 text-white p-4 lg:p-7 transition-colors duration-500 ${
        scrolled ? "bg-blue-500" : "bg-blue-700/90"
      }`}
    >
      <div className="w-full lg:w-[85%] mx-auto flex justify-between">
        <h1 onClick={() => handleClick("Home")} className="text-3xl font-bold">Bootslander</h1>
        <div className="gap-8 items-center hidden lg:flex">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`cursor-pointer relative text-gray-300 text-[18px] hover:text-white transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-5px]
                after:h-[2px] after:transition-all after:duration-700
                ${
                  activeSection === item
                    ? "text-white after:w-[50%] after:bg-green-btn"
                    : "after:w-0 after:bg-green-btn"
                }`}
            >
              {item}
            </div>
          ))}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block lg:hidden z-20">
          <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} text-2xl text-white`}></i>
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-10">
            <div className="bg-white w-[96%] h-[97%] rounded-lg shadow-lg flex flex-col transition-all duration-300">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleClick(item);
                    setIsMenuOpen(false);
                  }}
                  className={`text-gray-700 text-xl p-4 pl-6 font-semibold cursor-pointer hover:text-green-500 transition-colors duration-300 ${
                    activeSection === item ? "text-green-500" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      {scrolled && <button onClick={() => handleClick("Home")} className="bg-green-btn z-20 hover:bg-green-btn-hv w-11 h-11 flex justify-center items-center fixed right-3 bottom-3 rounded-md shadow-md">
        <i class="bi bi-arrow-up-short text-white text-2xl"></i>
      </button>}
    </div>
  );
};

export default Header;
