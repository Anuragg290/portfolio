import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out transform
                  ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                 `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transition-all duration-300
                      transform ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                  `}
          style={{ transitionDelay: `${index * 100}ms` }} 
        >
          {item}
        </a>
      ))}
    </div>
  );
};
