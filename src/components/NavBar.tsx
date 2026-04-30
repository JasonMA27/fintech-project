import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const styles = {
  link: "block hover:bg-white hover:text-slate-800 px-2 py-1 rounded-md transition-colors duration-300",
};

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" bg-green-800 p-3 text-white rounded-xl">
      <div className="flex justify-end-safe items-center mx-auto container">
        {/* navbar for large screens */}
        <ul className="md:flex space-x-6 hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md text-white"
          />
          <li>
            <a href="#" className={styles.link}>
              Notifications
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Profile
            </a>
          </li>
        </ul>
        <div className="cursor-pointer md:hidden">
          {isMenuOpen ? (
            <RiCloseLargeFill size={20} onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu size={20} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="flex space-y-6 flex-col mt-4 text-center md:hidden">
          <li>
            <a href="#" className={styles.link + " block"}>
              Overview
            </a>
          </li>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md text-white"
          />
          <li>
            <a href="#" className={styles.link}>
              Notifications
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Profile
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
