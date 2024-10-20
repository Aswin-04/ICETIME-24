import { clgImg, departmentImg } from "../assets/images";

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Committee",
    dropdown: true,
    items: [
      { label: "Advisory Committee", href: "/committee/advisory-committee" },
      {
        label: "Organizing Committee",
        href: "/committee/organizing-committee",
      },
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

export const aboutDetails = [
  {
    id: 3,
    title: "About the Conference",
    content: `

This conference primarily provides an interdisciplinary platform for academicians, researchers, industrial experts, and students to exchange new ideas and applications, and to establish research relationships to meet demands at the national and international levels.

**ICETIME'24** aims to promote cooperation in various fields and play an active role in improving academic standards by fostering wide discussions on topics such as:

- New materials
- Manufacturing processes
- Automation
- Energy and environment
- Industrial engineering
- Thermal sciences like CFD and alternative fuels

A panel discussion will be organized to cover recent trends in mechanical sciences as part of the conference.

Keynote lectures will focus on advanced manufacturing technology, industrial engineering, robotics, and thermal sciences throughout the event.

---

## Publications of the Proceedings

Proceedings of ICGEST 2024 will be published in the *E3S Web of Conferences* (Open Access proceedings in Environment, Energy and Earth Sciences), which is indexed in:

- Scopus
- Web of Science – Conference Proceedings Citation Index
- Ei Compendex
- IET Inspec
- Technology Collection (ProQuest)
- Chemical Abstracts Service (CAS)
- Other major indexing databases

*E3S Web of Conferences* (eISSN: 2267-1242) is an open-access publication series dedicated to archiving conference proceedings in all areas related to Environment, Energy, and Earth Sciences. The journal covers both technological and scientific aspects, as well as social and economic matters. 

### Major disciplines include:
- Soil sciences
- Hydrology
- Oceanography
- Climatology
- Geology
- Geography
- Energy engineering (production, distribution, and storage)
- Renewable energy
- Sustainable development
- Natural resources management
- Environmental health
`,
    img: "",
    imgAlt: "",
  },

  {
    id: 1,
    title: "About the Institution",
    content: `

**Sri Sai Ram Engineering College**, a BIS/EOMS ISO 21001:2018 certified Institution, was established by Founder Chairman MJF. Ln. Leo Muthu in 1995. All the eligible Engineering programs have been accredited by the National Board of Accreditation (NBA) and also accredited by NAAC with an ‘A+’ grade. The College is situated in a sylvan environment and offers sixteen UG courses and six PG courses in Engineering, Technology, and Management, with a strength of over 5000 students.

The Institution has grown and is recognized among the reputed Institutions in Tamil Nadu in a short span of time, thanks to the highest degree of commitment and enthusiasm from the staff and management. With the motto, **“Prosperity through quality education,”** the institution disseminates knowledge and entrepreneurship skills among the students and strives to achieve excellence in the fields of Technical, Computer, and Management education. The College is among the top Colleges in Tamil Nadu.

In the NIRF ranking among engineering Colleges in India, Sri Sairam Engineering College, Chennai, has been positioned in 157th place in 2022. The College has adopted the **‘Sustainable Development Goals (SDG)’** in all its activities to create awareness and build a sense of responsibility towards society in the minds of budding engineers, with the aim of building a better world. The College has highly qualified and dedicated professors guiding various socially relevant projects funded through state and central government agencies like DST, AICTE, DRDO, CSIR, and MHRD, and publishing research outputs in various national and international journals.

`,
    img: clgImg,
    imgAlt: "clgImg",
  },

  {
    id: 2,
    title: "About the Department",
    content: `

The Department of Mechanical Engineering was established in the year 1995. It has excellent infrastructural facilities on par with the latest developments in technologies. The department is accredited by the National Board of Accreditation and is backed by professionally experienced and highly qualified faculty and supporting staff. The Department received the **‘Best Industry Linked AICTE-CII Award’** in 2015 and 2020.

The Master of Engineering (M.E) - CAD/CAM program focuses on preparing graduate students in the multi-disciplinary profession of computer-aided design and manufacturing for the challenges and opportunities that abound in modern technology and society. The Department has been recognized as a Research Centre by Anna University and has several research centers, including the Material Research Centre, Clean Energy Centre, and Reverse Engineering & CAE Centre.

The Department has signed MoUs with organizations like TIEMA, AIEMA, COINDIA, and many leading industries. It also has professional societies such as SAE, ISTE, IEI, ISHRAE, IWS, IEEE, and QCFI. Our students have bagged awards from SAE events like M-BAJA, E-BAJA, SUPRA, TIFAN, Effi-Cycle, Bicycle, and other events like Solaris, Go-Kart, E-bike, and Dirt Bike.

`,
    img: departmentImg,
    imgAlt: "departmentImg",
  },
];


export const quickLinks = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "Advisory Committee", href: "/committee/advisory-committee" },
    { label: "Organizing Committee", href: "/committee/organizing-committee",},
    { label: "Technical Committee", href: "/committee/technical-committee" },
    { label: "Speakers", href: "/speakers" },
    { label: "Call for Papers", href: "/for-authors/call-for-papers" },
    { label: "Important Dates", href: "/for-authors/important-dates" },
    { label: "Review Process", href: "/for-authors/review-process" },
    { label: "Program Schedule", href: "/program-schedule" },
    { label: "Contact", href: "/contact" },
    { label: "Registration", href: "/registration" },
  ],
};