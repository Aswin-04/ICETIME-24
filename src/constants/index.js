export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Committee",
    dropdown: true,
    items: [
      { label: "Advisory Committee", href: "/committee/advisory-committee" },
      { label: "Organizing Committee", href: "/committee/organizing-committee" },
      { label: "Technical Committee", href: "/committee/technical-committee" },
    ],
  },
  { label: "Speakers", href: "/speakers" },
  {
    label: "For Authors",
    dropdown: true,
    items: [
      { label: "Call for Papers", href: "/for-authors/call-for-papers" },
      { label: "Important Dates", href: "/for-authors/important-dates" },
      { label: "Review Process", href: "/for-authors/review-process" },
    ],
  },
  { label: "Program Schedule", href: "/program-schedule" },
  { label: "Contact", href: "/contact" },
  { label: "Registration", href: "/registration" },
];