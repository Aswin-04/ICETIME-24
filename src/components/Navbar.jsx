import { useState, useEffect } from "react";
import { navItems } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("home"); // Default active link set to "home"
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  // Update the active link based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname.split("/")[1].replace(/\s+/g, "-"); // Replace spaces with dashes
    setActiveLink(currentPath ? currentPath.toLowerCase() : "home");
  }, [location]);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = (label) => {
    setActiveLink(label);
    if (isMenuOpen) setIsMenuOpen(false); // Close mobile menu on link click
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) setActiveDropdown(null); // Reset dropdown when closing the menu
  };

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-bgd border border-gray-200 z-50">
      {/* Mobile Screen */}
      <div className="ns:hidden py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">ICIMME&apos;25</div>
        <button
          onClick={toggleMenu}
          type="button"
          className={`inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 border transition-transform duration-600 ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="w-full text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>


          <div  className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-600 bg-slate-100 absolute right-0 top-0 mt-[89px] border min-h-screen w-full`}>
            <ul className="p-10 flex flex-col gap-8 font-medium">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <button
                    className={`${
                      activeLink === item.label.toLowerCase().replace(/\s+/g, "-") ? "text-cyan-500" : ""
                    } `}
                    onClick={() => {
                      if (item.dropdown) {
                        handleDropdownToggle(item.label.toLowerCase());
                      } else {
                        handleLinkClick(item.label.toLowerCase());
                      }
                    }}
                  >
                    <Link to={item.href} className="flex items-center">
                      {item.label}
                      {item.dropdown && (
                        <svg
                          className={`${activeLink === item.label ? "text-cyan-500" : "text-inherit"} ml-1 mt-[2px] size-5`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <title>chevron-down</title>
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      )}
                    </Link>
                  </button>

                  {/* Dropdown items */}
                  {item.dropdown && activeDropdown === item.label.toLowerCase()  && (
                    <div className="mt-2 w-48 bg-slate-100 divide-y divide-gray-100 rounded-lg shadow">
                      <ul className="py-2 text-sm text-gray-700">
                        {item.items.map((dropdownItem, idx) => (
                          <li key={idx}>
                          {dropdownItem.isExternal ? (
                            <a
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              to={dropdownItem.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={() => handleLinkClick(item.label.toLowerCase())}
                            >
                              {dropdownItem.label}
                            </Link>
                          )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

      </div>

      {/* Large Screen */}
      <div className="max-ns:hidden mx-auto max-w-[1600px] p-6 flex justify-between">
      <div className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">ICIMME&apos;25</div>
        <ul className="flex items-center gap-8 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() =>
                item.dropdown ? handleMouseEnter(item.label.toLowerCase()) : null
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if(['Committee', 'For Authors', 'Publications', 'History'].includes(item.label)) return
                handleLinkClick(item.label.toLowerCase())
              } }
            >
              {!item.dropdown ? (
                <button
                  className={`${
                    activeLink === item.label.toLowerCase().replace(/\s+/g, "-") ? "text-cyan-500" : ""
                  }`}
                >
                  <Link to={item.href}>
                    {item.label}
                    <span
                      className={`scale-x-0 absolute h-1 origin-left -left-2 -right-2 -bottom-2 bg-accent-600 rounded group-hover:scale-x-100 transition-transform duration-300 ease-out`}
                    ></span>
                  </Link>
                </button>
              ) : (
                <button className="group">
                  <div
                    className={`${
                      activeLink === item.label.toLowerCase().replace(/\s+/g, "-") && item.label !== "History"
                       ? "text-cyan-500" 
                       : ""
                    } flex items-center`}
                  >
                    {item.label}
                    <svg
                      className={`ml-1 mt-[2px] size-5 ${
                        activeLink === item.label.toLowerCase().replace(/\s+/g, "-") && item.label !== "History"
                          ? "text-cyan-500"
                          : "text-inherit"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <title>chevron-down</title>
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </div>
                  <span
                    className={`scale-x-0 absolute h-1 origin-left -left-2 -right-2 -bottom-2 bg-accent-600 rounded transition-transform duration-300 ease-out group-hover:scale-x-100`}
                  ></span>
                  <div className="absolute h-9 bg-transparent w-48 z-10"></div>
                </button>
              )}

              {item.dropdown && activeDropdown === item.label.toLowerCase() && (
                <div
                  id="dropdownNavbar"
                  className="absolute top-14 z-50 bg-bgd divide-y divide-gray-100 rounded-lg shadow w-48"
                  onClick={() => handleLinkClick(item.label.toLowerCase())}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {item.items.map((dropdownItem, idx) => (
                      <li key={idx}>
                          {dropdownItem.isExternal ? (
                            <a
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              to={dropdownItem.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={() => handleLinkClick(item.label.toLowerCase())}
                            >
                              {dropdownItem.label}
                            </Link>
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
