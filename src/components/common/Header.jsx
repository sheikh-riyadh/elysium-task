import { FaBars } from "react-icons/fa";
import person from "../../assets/pd-person.jpg";
import { useState } from "react";
import MobileSidebar from "../mobile/MobileSidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-card sticky top-0 flex items-center justify-between lg:justify-end p-3.5  z-30 border-b border-border-primary">
      <div className="cursor-pointer lg:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        <FaBars className="text-2xl text-primary" />
      </div>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <div>
              <img className="w-8 h-8 rounded-full" src={person} alt="user" />
            </div>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <MobileSidebar
          isOpen={isOpen}
          onClose={setIsOpen}
          key={"mobleSidebar"}
          className={"bg-card h-screen z-50"}
        />
      )}
    </header>
  );
};

export default Header;
