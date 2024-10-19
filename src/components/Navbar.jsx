import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = (label) => {
    setActiveLink(label)
  }

  const navItems = [
    { label: "Home", href: "#" },
    {
      label: "Committee",
      dropdown: true,
      items: [
        { label: "Advisory Committee", href: "#" },
        { label: "Organizing Committee", href: "#" },
        { label: "Technical Committee", href: "#" },
      ],
    },
    { label: "Speakers", href: "#" },
    {
      label: "For Authors",
      dropdown: true,
      items: [
        { label: "Call for Papers", href: "#" },
        { label: "Important Dates", href: "#" },
        { label: "Review Process", href: "#" },
      ],
    },
    { label: "Program Schedule", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Registration", href: "#" },
  ];

  return (
    <nav className="bg-bgd border border-gray-200">
      <div className="mx-auto max-w-screen-wide p-6 flex justify-between">
        <div className="text-2xl font-bold tracking-tight">ICETIME&apos;24</div>
        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() =>
                item.dropdown ? handleMouseEnter(item.label.toLowerCase()) : null
              }
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleLinkClick(item.label.toLocaleLowerCase())}
            >
              {!item.dropdown ? (
                <a href={item.href}>
                  {item.label}
                  <span className={`${activeLink === item.label.toLowerCase() ? "scale-x-100" :"scale-x-0"} absolute h-1 origin-left -left-2 -right-2 -bottom-2 bg-accent-600 rounded group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span>
                  {/* <span className={`scale-x-0 absolute h-1 origin-left -left-2 -right-2 -bottom-2 bg-indigo-300 rounded group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span> */}
                </a>
              ) : (
                <a>
                  <button className="flex items-center">
                    {item.label}
                    <svg
                      className="ml-1 mt-[2px] size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#0a0f11"
                    >
                      <title>chevron-down</title>
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                    <span className={`${activeLink === item.label.toLowerCase() ? "scale-x-100" :"scale-x-0"} absolute h-1 origin-left -left-2 -right-2 -bottom-2 bg-accent-600 rounded group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span>
                  </button>
                  <div className="absolute  h-9 bg-transparent w-48 z-10"></div>
                </a>
              )}


              {item.dropdown && activeDropdown === item.label.toLowerCase() && (
                <div
                  id="dropdownNavbar"
                  className="absolute top-14 z-10 bg-bgd divide-y divide-gray-100 rounded-lg shadow w-48"
                  onClick={() => handleLinkClick(item.label.toLocaleLowerCase())}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {item.items.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <a
                          href={dropdownItem.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </a>
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
