import { clgImg, departmentImg, secMotorSportsImg } from "../assets/images";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {
  bhoopathiImg,
  hodImg,
  krishnarajImg,
  parswajinanImg,
  ravikumarImg,
  ravindranImg,
  ravirajImg,
  senthilkumarImg,
  sudhakarImg,
  ceoImg,
  principalImg,
  rpImg,
} from "../assets/images/";

import {
  subramanianImg,
  subramanian1Img,
  aravindRaghavendraImg,
  mithunKulkarniImg,
  vijayanImg,
  samSungTingImg,
  leeChangChuanImg,
} from "../assets/images/";

import ICAME21 from "../assets/docs/ICAME-21.pdf";
import ICMMMS16 from "../assets/docs/ICMMMS-16.pdf";

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
      // { label: "Technical Committee", href: "/committee/technical-committee" },
    ],
  },
  { label: "Speakers", href: "/speakers" },
  {
    label: "For Authors",
    dropdown: true,
    items: [
      { label: "Call for Papers", href: "/for-authors/call-for-papers" },
      {
        label: "Abstract Submission",
        href: "/for-authors/abstract-submission",
      },
      { label: "Important Dates", href: "/for-authors/important-dates" },
      {
        label: "Instructions to Authors",
        href: "/for-authors/instructions-to-authors",
      },
    ],
  },
  {
    label: "Publications",
    dropdown: true,
    items: [
      { label: "About AIP", href: "/publications/about-aip" },
      {
        label: "Publication Process",
        href: "/publications/publication-process",
      },
      { label: "Review Process", href: "/publications/review-process" },
    ],
  },
  { label: "Program Schedule", href: "/program-schedule" },
  { label: "Contact", href: "/contact" },
  { label: "Registration", href: "/registration" },
  {
    label: "Previous Conferences",
    dropdown: true,
    items: [
      { label: "ICAME-21", href: ICAME21, isExternal: true },

      { label: "ICMMMS-16", href: ICMMMS16, isExternal: true },
    ],
  },
];

export const aboutDetails = [
  {
    id: 3,
    title: "About the Conference",
    content: `
  
  This conference mainly provides an interdisciplinary platform for academicians, Researchers, Industrial Experts, and also students to exchange their new ideas and application to establish research relations to meet the demand on National and International level. **ICIMME’25** aims to promote cooperation in various areas and an active role in improving academic standards by implementing a wide discussion on new Materials Engineering, Manufacturing Engineering & Energy Engineering.
  
  A panel discussion formed in the recent trends in Mechanical Sciences as a part of the conference in continued with keynote lecture on advanced manufacturing technology, Industrial Engineering, Robotics and Thermal Sciences also focused during conference.
  
  `,
    img: "",
    imgAlt: "",
  },

  {
    id: 1,
    title: "About the Institution",
    content: `
  **Sri Sai Ram Engineering College**, a BIS/EOMS ISO 21001:2018 certified Institution, was established by Founder MJF. Ln. Leo Muthu in 1995. The college is accredited by NAAC with an ‘A+’ grade, and all eligible Engineering programs are accredited by the National Board of Accreditation (NBA). Situated in a sylvan environment, the College offers sixteen UG courses and six PG courses in Engineering, Technology, and Management, serving a student body of over 6000.
  
  Recognized among the reputed institutions in Tamil Nadu, the College's growth and reputation reflect the commitment and enthusiasm of its staff and management. Guided by the motto, **“Prosperity through quality education,”** the institution imparts knowledge and entrepreneurship skills, striving for excellence in Technical, Computer, and Management education. Sri Sai Ram Engineering College is consistently ranked among the top colleges in Tamil Nadu and has been listed in the NIRF since 2017.
  
  The College has also integrated the **‘Sustainable Development Goals (SDG)’** into its activities to foster social responsibility and environmental awareness in its students, aspiring to contribute to a better world. With a team of highly qualified and dedicated Professors, the College supports various socially relevant projects funded by state and central government agencies, including DST, AICTE, DRDO, CSIR, MOE, and UBA, and publishes research in national and international journals.
  `,
    img: clgImg,
    imgAlt: "clgImg",
  },

  {
    id: 2,
    title: "About the Department",
    content: `
  
  The Department of Mechanical Engineering was established in the year 1995. It has excellent infrastructural facilities on par with the latest developments in technologies. The department is accredited by the National Board of Accreditation since 2007 and is supported by professionally experienced and highly qualified faculty and staff. The Department received the **‘Best Industry Linked AICTE-CII Award’** in 2015 and 2020.
  
  The Master of Engineering (M.E) - CAD/CAM program is designed to prepare graduate students in the multi-disciplinary fields of computer-aided design and manufacturing, addressing the challenges and opportunities presented by modern technology and society. The Department has been recognized as a Research Centre by Anna University and hosts several centers of excellence, including Material Research, Clean Energy, Reverse Engineering & CAE.
  
  The Department has signed MoUs with industry associations such as TIEMA, AIEMA, COINDIA, and other leading industries. It also supports professional societies, including SAE, ISTE, IEI, ISHRAE, IWS, IEEE, and QCFI. Our students have won awards in SAE events like M-BAJA, E-BAJA, SUPRA, TIFAN, Effi-Cycle, and in other competitions like Solaris, Go-Kart, E-bike, and Dirt Bike. Delphi TVS has established a Centre of Excellence within the department, advancing training in fuel injection systems.
  
  `,
    img: departmentImg,
    imgAlt: "departmentImg",
  },

  {
    id: 3,
    title: "SEC Motorsports",
    img: secMotorSportsImg,
    imgAlt: "SecMotorsports img",
    content: `
SEC Motorsports is a club from the Mechanical Engineering Department of Sri Sai Ram Engineering College. This club is the hub of all motorsport events under one banner, including **The Rocketeer Racing**, **Team Evega Racing**, **Team Luaskart**, **Team Agrosters**, **Racing Rois**, **Green Pyora**, **Black Squad**, and **Revival Racing**. These teams participate in various national-level events and bring pride to the club through their numerous prestigious awards in different categories, achieving high accolades, including All India Rankings (AIR).

SEC Motorsports encourages students to enroll, gain hands-on experience, and develop knowledge in recent automotive and manufacturing technologies. From design and modeling to prototyping and fabrication, the club provides comprehensive exposure to modern industry practices and innovation.
`,
  },
];

export const publicationProcess = {
  label: "The Publication Process",
  content: `
## Publication Process

Proceedings publication differs from regular journals in several aspects, which makes it important for all authors to follow our guidelines.

Most pure proceedings publications, including ours, use author-prepared PDF files for publication and production of printed copies. Proceedings papers are submitted directly to the proceedings editors who manage the review process and collect the accepted articles. The editors submit the proceedings articles and copyright release forms to AIP Publishing in a single batch rather than individually as each paper is ready.

The proceedings manuscripts are published as a single collection (volume) of AIP Conference Proceedings. After the editors have collected sufficient accepted manuscripts, or as many manuscripts as authors are willing to write, they submit them to us in a single batch. We cannot publish any proceedings until the entire set of files meets the requirements of our publication and production systems.

## Abstracting & Indexing (A+I)

AIP Publishing recognizes the importance of enhancing visibility and discoverability of published research by including published research in abstracting and indexing (A+I) databases that researchers use. We support the work of A+I services by providing researchers with access to all of our published proceedings volumes upon publication.

However, how quickly selected proceedings are available in an A+I service is up to the provider; AIP Publishing has no influence on this timeframe. 

### AIP Conference Proceedings are indexed in the following services:

- The Conference Proceedings Citation Index (part of Web of Science)
- Scopus (Elsevier)
- Inspec
- Chemical Abstracts Service (CAS)
- Astrophysics Data System (ADS)
  `,
};

export const reviewProcess = {
  label: "Review Process",
  content: `
  ## Peer Review

  AIP Publishing understands the nature and purpose of conference proceedings and their essential role within the field of scientific communication. We encourage you to provide proceedings that contain work that is of long-term interest and benefit to the scientific community; in other words, articles that can be read and cited with confidence. To achieve this goal, we have strengthened our requirements for proceedings editors to commit to undertaking an appropriate peer-review process. Conference organizers and editors may select their reviewers, but all reviewers must be suitably qualified experts in the field. Although AIP Publishing does not prescribe the number of reviewers per manuscript for the proceedings, all reviews must be conducted according to the standard norms and expectations of an ethical review process. A robust peer-review process will reflect the quality of the published proceedings, providing recognition of the editors’ work and enhancing the value of your proceedings to abstracting and indexing services.

  ## Guidelines

  Compared with journals, proceedings can publish a much wider range of articles, providing scope and opportunity to create comprehensive proceedings volumes. In addition to original research manuscripts, AIP Conference Proceedings welcomes review or tutorial articles and other works that provide useful summaries, background information, or introductions to specific fields of research. We also welcome articles that provide a historical perspective or review. AIP Publishing understands that the specifics of the review process will need to be according to the community’s and conference’s traditions or expectations. Keep in mind that although proceedings include a broader range of article types, they should not include poor quality or inferior work that is fundamentally unworthy of publication.

  We ask all editors and associated referees to evaluate each manuscript according to the following minimum criteria.

  **Contribution:** Would publication of the article make a positive contribution to the scientific literature? What would you gain by reading it? An article’s contribution does not need to be new or unpublished results; for example, it can have the following attributes:
    - New explanations of familiar topics
    - Excellent descriptions or explanations of complex subjects
    - Tutorials or review articles
    - Useful or interesting background information
    - Enjoyable and informed historical perspective or overview
    - Be more than an abstract (we reject 1-page, abstract-only articles)
    - Have merit (through its rigor, accuracy, or correctness)
    - Be original (previously unpublished and solely the work of the author)
    - Include an abstract (with a sufficient summary of the paper and outline of goals, results, and conclusion, including conveying sufficient understanding when read in isolation from the paper)

  **Title:** Have an adequate title (correctly describes the article such that reading it alone would convey the nature and content).

  **Conclusions:** Have reasonable conclusions (based on the results presented, or ideas/concepts discussed).

  **Clarity:** Is clear and concise (well-expressed ideas readable and understandable by its intended readership).

  **Language:** Uses correct English (sufficiently conveys the science and intent/meaning or purpose).

  Poorly written papers will be returned to the authors for re-writing or will be rejected if the author is unable or unwilling to make the recommended improvements.

  ## References

  References will depend on the type of article; however, here are some general questions you may like to consider.

  - Do the references look appropriate for the topic? Are key papers missing that you would expect to see?
  - Is the distribution of journals and publications cited, and age of the citations, appropriate?
  - Do the references demonstrate that the author is aware of current and key research in their field?
  `,
};

export const aboutAIP = {
  label: "About AIP Publishing",
  content: `

  A wholly owned not-for-profit subsidiary of the **American Institute of Physics (AIP)**, AIP Publishing’s mission is to advance, promote, and serve the physical sciences for the benefit of humanity by empowering researchers and breaking down barriers to open, equitable research communication. Our services, tools, and platforms connect researchers with publications, peers, institutions, and societies across the globe, expanding the reach and impact of their work.

  AIP Publishing’s extensive and growing portfolio of journals and conference proceedings, partner publications, and the AIP flagship magazine Physics Today provides high-quality, rigorously peer-reviewed research and insights across the physical sciences, including but not limited to applied physics, biophysics, chemical physics, energy, materials science, nanoscience, and photonics. The depth and breadth of that content has made us a leading and vital scientific publishing house.

  ---

  ### AIP Conference Proceedings

  AIP Conference Proceedings contains over 100,000 articles published in over 1700 volumes. This substantial body of scientific literature is testament to our 40-year history as a world-class publishing partner, recognized internationally, and trusted by conference organizers worldwide.
  `,
};

export const quickLinks = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "Advisory Committee", href: "/committee/advisory-committee" },
    { label: "Organizing Committee", href: "/committee/organizing-committee" },
    { label: "Speakers", href: "/speakers" },
    { label: "Call for Papers", href: "/for-authors/call-for-papers" },
    { label: "Abstract Submission", href: "/for-authors/abstract-submission" },
    { label: "Important Dates", href: "/for-authors/important-dates" },
    {
      label: "Instructions to Authors",
      href: "/for-authors/instructions-to-authors",
    },
    { label: "About AIP", href: "/publications/about-aip" },
    {
      label: "Publication Process",
      href: "/publications/publication-process",
    },
    { label: "Review Process", href: "/for-authors/review-process" },
    { label: "Program Schedule", href: "/program-schedule" },
    { label: "Contact", href: "/contact" },
    { label: "Registration", href: "/registration" },
  ],
};

export const internationalAdvisoryCommittee = [
  {
    name: "Dr. Tariq Darabseh",
    designation: "Jordan University of Science and Technology",
  },
  {
    name: "Prof. Mohammad Reza Eslami",
    designation: "Amirkabir University of Technology, Iran",
  },
  {
    name: "Ir. Dr. Masri Bin Baharom",
    designation:
      "Head of Mechanical Engineering Department, Universiti Teknologi PETRONAS (UTP), Malaysia",
  },
  { name: "Prof. Ashraf A Shikdar", designation: "Sultan Qaboos University" },
  {
    name: "Prof. Naser S. Al-Huniti",
    designation: "University of Jordan, Jordan",
  },
  { name: "Dr. Peter Neilsen", designation: "Aalborg University, Denmark" },
  {
    name: "Mr. Chinna Chinnakaruppan",
    designation: "CAC Business Solutions, U.S.A",
  },
  { name: "Mr. S. Ganesh", designation: "President, AMTEC Precision, USA" },
  {
    name: "Dr. Yousef Amer",
    designation: "Program Director at University of South Australia",
  },
  {
    name: "Dr. A. Senthikumar",
    designation: "National University of Singapore, Singapore",
  },
  {
    name: "Dr. (Ing) Christian Oliver Paschereit",
    designation:
      "Hermann Fottinger Institute (HFI) for Fluid Dynamics and Technical Acoustics, TU Berlin",
  },
  {
    name: "Tajul Ariffin B Shamsuddin",
    designation: "Senior Executive, Universiti Teknologi Petronas, Malaysia",
  },
  {
    name: "Dr. Vijanth Sagayan Asirvadam",
    designation: "Associate Professor, Universiti Teknologi Petronas, Malaysia",
  },
  { name: "Prof. Paulo Davam", designation: "University of Aveiro, Portugal" },
  {
    name: "F.T.S. Chan",
    designation: "Hong Kong Polytechnic College, Hong Kong",
  },
  {
    name: "Yung-Tien Liu",
    designation:
      "Professor, Dr. Eng. National Kaohsiung First University of Science and Technology, Taiwan",
  },
  {
    name: "Prof. Khaled Abou-El-Hossein",
    designation: "Director, NMMU, South Africa",
  },
  { name: "Prof. Tapas Mallick", designation: "University of Exeter, UK" },
  {
    name: "S. Nachiappan",
    designation: "University of Nottingham Ningbo, China",
  },
  {
    name: "M.M. Noor",
    designation: "University Malaysia Pahang (UMP), Malaysia",
  },
  { name: "Dr. B.V. Reddy", designation: "UOIT, Canada" },
];

export const nationalAdvisoryCommittee = [
  { name: "Dr. Anand Goyal", designation: "Vice-Chancellor, A.P.Goyal Shimla University, Shimla" },
  { name: "Dr. Atmananad", designation: "Director, National Institute of Ocean Technology, Chennai" },
  { name: "Dr. Azad", designation: "Director, Centre for International Affairs, Anna University, Chennai" },
  { name: "Prof. B.V. Babu", designation: "Vice Chancellor, Galgotia University, Noida" },
  { name: "Dr. Dhanalakshmi V.", designation: "TCE, Madurai" },
  { name: "Dr. Gajendran S.", designation: "Anna University, Chennai" },
  { name: "Dr. Gobinath Chintala", designation: "Alliance University, Karnataka" },
  { name: "Dr. Jayavel S.", designation: "IIITD & M, Kanchipuram" },
  { name: "Dr. Jeyapaul R.", designation: "NIT, Trichy" },
  { name: "Dr. Jose Mathew", designation: "NIT Calicut" },
  { name: "Dr. A. Suresh Babu", designation: "Anna University, Chennai" },
  { name: "Dr. M. Om Kumar", designation: "Anna University, Chennai" },
  { name: "Dr. Kesavan R.", designation: "Anna University, Chennai" },
  { name: "Dr. Lenin Babu", designation: "VIT, Chennai" },
  { name: "Dr. Loganathan M.", designation: "Annamalai University, Chidambaram" },
  { name: "Mr. V. Balajikrishna", designation: "Vice-President, Brakes India Pvt. Ltd., Chennai" },
  { name: "Dr. K. Palanikuamr", designation: "Principal, Sri Sairam Institute of Technology, Chennai" },
  { name: "Dr. Manoharan N.", designation: "Hindustan University, Chennai" },
  { name: "Dr. Mohan B.", designation: "Anna University, Chennai" },
  { name: "Dr. Sathyan Subbiah", designation: "IIT, Chennai" },
  { name: "Dr. Murugan S.", designation: "NIT, Rourkela" },
  { name: "Dr. Narendiran T.T.", designation: "IIT, Chennai" },
  { name: "Dr. T. Sekar", designation: "GCT, Coimbatore" },
  { name: "Dr. Prabakaran S.", designation: "Mepco, Sivakasi" },
  { name: "Dr. Rajan T.P. D.", designation: "NIIST, Trivandrum" },
  { name: "Dr. Rajaram", designation: "SRM University, Chennai" },
  { name: "Dr. Rajesekaran S.", designation: "SRM University, Chennai" },
  { name: "Dr. Rajesh R.", designation: "Rohini Engineering College, Kanyakumari" },
  { name: "Dr. Senthil R.", designation: "Anna University, Villupuram" },
  { name: "Dr. Senthilvelan S.", designation: "IIT, Guwahati" },
  { name: "Dr. Senthilvelan T.", designation: "PEC, Pondicherry" },
  { name: "Dr. Udaya Kumar M.", designation: "Amrita University, Kollam" },
  { name: "Dr. S Kathiresan", designation: "Anna University, Chennai" },
  { name: "Dr. Vijaya Raghavan L.", designation: "IIT, Chennai" },
  { name: "Dr. Vijaya Kumar S.", designation: "Anna University, Chennai" },
  { name: "Dr. Krishnakumar S.", designation: "Senior Officer, DRDO" },
  { name: "Dr. J. Jayaprakash", designation: "Professor, MGR University" },
  { name: "Dr. T. Jaya Kumar", designation: "Professor, AMET University, Chennai" },
  { name: "Dr. Prakash", designation: "Professor, Sathyabama University, Chennai" }
];


export const chiefPatronProfiles = [
  {
    img: ceoImg, // Replace with actual image path
    imgAlt: "saiPrakashSirImg",
    name: "Dr. Sai Prakash Leo Muthu",
    designation: "Chairman & CEO",
    // department: "Department of Mechanical Engineering",
    college: "Sairam Institutions",
    linkedIn: "https://www.linkedin.com/in/sairamceo/", // Replace with actual LinkedIn URL
  },
];

export const patronProfiles = [
  {
    img: principalImg, // Replace with actual image path
    imgAlt: "rajaSirImg",
    name: "Dr. J. Raja",
    designation: "Principal",
    // department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/raja-j-32b44164/", // Replace with actual LinkedIn URL
  },
];

export const chairProfiles = [
  {
    img: rpImg, // Replace with actual image path
    imgAlt: "rajendraPrasadSirImg",
    name: "Dr. A Rajendra Prasad",
    designation: "Dean - Student Affairs",
    // department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/arprasad225/", // Replace with actual LinkedIn URL
  },
];

export const convenorProfiles = [
  {
    img: hodImg, // Replace with actual image path
    imgAlt: "vijayaRamnathSirImg",
    name: "Dr. B. Vijaya Ramnath",
    designation: "Professor & Head",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/dr-b-vijaya-ramnath-5bb11542/", // Replace with actual LinkedIn URL
  },
];

export const coConvenorProfiles = [
  {
    img: ravirajImg, // Replace with actual image path
    imgAlt: "raviRajSirImg",
    name: "Dr. V. Ravi Raj",
    designation: "Associate Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/v-ravi-raj/", // Replace with actual LinkedIn URL
  },
  {
    img: bhoopathiImg, // Replace with actual image path
    imgAlt: "bhoopathiSirImg",
    name: "Dr. R. Bhoopathi",
    designation: "Associate Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/dr-r-bhoopathi-m-e-ph-d-038859a4/", // Replace with actual LinkedIn URL
  },
  {
    img: parswajinanImg, // Replace with actual image path
    imgAlt: "parswajinanSirImg",
    name: "Dr. C. Parswajinan",
    designation: "Associate Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/parswajinan-c-163875143/", // Replace with actual LinkedIn URL
  },
];

export const organizingSecretaryProfiles = [
  {
    img: krishnarajImg, // Replace with actual image path
    imgAlt: "krishnarajSirImg",
    name: "Mr. S. Krishnaraj",
    designation: "Associate Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/krishnaraj-s-94398bb4/", // Replace with actual LinkedIn URL
  },
  {
    img: senthilkumarImg, // Replace with actual image path
    imgAlt: "senthilKumarSirImg",
    name: "Mr. R. Senthil Kumar",
    designation: "Associate Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/senthilkumar-mech2020/", // Replace with actual LinkedIn URL
  },
  {
    img: ravindranImg, // Replace with actual image path
    imgAlt: "ravinthiranSirImg",
    name: "Mr. A. Ravinthiran",
    designation: "Assistant Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/ravinthiran/", // Replace with actual LinkedIn URL
  },
  {
    img: ravikumarImg, // Replace with actual image path
    imgAlt: "ravikumarSirImg",
    name: "Mr. L. Ravikumar",
    designation: "Assistant Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/ravi-kumar-l-2518251b0/", // Replace with actual LinkedIn URL
  },
  {
    img: sudhakarImg, // Replace with actual image path
    imgAlt: "sudhakarSirImg",
    name: "Mr. M. Sudhakar",
    designation: "Assistant Professor",
    department: "Department of Mechanical Engineering",
    college: "Sri Sai Ram Engineering College",
    linkedIn: "https://www.linkedin.com/in/sudhakarmech2013/", // Replace with actual LinkedIn URL
  },
];

export const importantDates = [
  {
    deadline: "Last date for submitting Abstract",
    date: "22nd November 2024",
    icon: DriveFolderUploadIcon,
  },
  {
    deadline: "Notification of acceptance of Abstract",
    date: "27th November 2024",
    icon: CheckCircleOutlineIcon,
  },
  {
    deadline: "Last date for submitting full length paper",
    date: "10th December 2024",
    icon: DescriptionIcon,
  },
  {
    deadline: "Notification of acceptance of full length paper",
    date: "20th December 2024",
    icon: CheckCircleOutlineIcon,
  },
  {
    deadline: "Last date for registration",
    date: "6th January 2025",
    icon: CreditCardIcon,
  },
];

export const conferenceTracks = `

## Track-1: Materials Engineering

- Advances in Composite Materials and Structures
- Advanced Materials Processes
- Polymer Nanocomposites and Their Applications
- Lightweight Materials and Composites
- Biomaterials
- Mechanics of Materials
- Polymers and Alloys
- Ceramics and Glass
- Micro/Nanomaterials
- Materials for Aerospace
- 3D Materials
- Magnetic/Non-Magnetic Materials
- Smart/Intelligent Materials

## Track-2: Manufacturing Engineering

- Manufacturing Systems and Industry 4.0
- Sustainable Manufacturing and Design Innovations
- Advanced Manufacturing Processes
- Additive Manufacturing and 3D Printing Technologies
- Advances in Non-Destructive Testing Techniques
- Finite Element Method (FEM) in Manufacturing Processes
- Non-Conventional Manufacturing
- Design for Manufacturing

## Track-3: Energy Engineering

- Innovations in Energy Harvesting and Energy Conversion
- Renewable Energy Systems
- Energy Management and Distribution
- Control Strategies for Green Energy Systems
- Innovations in Thermal Energy Storage Systems
- Energy Efficiency in Renewable Energy Technologies
- Computational Mechanics and Simulation Techniques
- Fuel Cell Technology
- Impact of Climate Change on Energy Systems
- Green Energy Vehicles

`;

export const instructionsToAuthors = `
- Papers submitted are not to be previously published in any other forum.
- All submitted papers will be scrutinized by an expert committee.
- The authors of selected papers will be intimated through e-mail only.
- Authors willing to present their paper at the conference should submit the full-length paper in **.doc** format (AIP format).
- The paper should be uploaded to the website on or before the proposed date.
- Presentations at the conference will be conducted **offline**.
`;


export const conferenceAgenda1 = [
  {
    timing: "09:00 AM",
    program: "Address & Registration / Welcome",
  },
  {
    timing: "10:00 AM",
    program: "Keynote Speech (Track 1, 2, 3)",
  },
  {
    timing: "11:00 AM",
    program: "Technical Sessions",
  },
  {
    timing: "01:00 PM",
    program: "Lunch",
  },
  {
    timing: "02:00 PM",
    program: "Panel Discussions",
  },
];

export const conferenceAgenda2 = [
  {
    timing: "09:00 AM",
    program: "Special Address",
  },
  {
    timing: "10:00 AM",
    program: "Keynote Speech (Track 4, 5)",
  },
  {
    timing: "11:00 AM",
    program: "Technical Sessions",
  },
  {
    timing: "01:00 PM",
    program: "Lunch",
  },
  {
    timing: "02:00 PM",
    program: "Panel Discussions",
  },
];

export const speakers = [
  {
    img: subramanian1Img,
    imgAlt: "subramanianSirImg",
    name: "Dr. C. Subramanian",
    designation: "Assistant Professor",
    department: "Department of Mechanical Engineering",
    college: "Bahrain Technical College, Bahrain",
    linkedIn: "", // Replace with actual LinkedIn URL
  },
  {
    img: aravindRaghavendraImg, // Replace with actual image path
    imgAlt: "aravindSirImg",
    name: "Aravind Raghavendra M R",
    designation: "Development Scientist",
    department: "",
    college: "Advanced Remanufacturing Technology Center",
    linkedIn: "", // Replace with actual LinkedIn URL
  },

  {
    img: vijayanImg, // Replace with actual image path
    imgAlt: "vijayanSirImg",
    name: "Dr. V. Vijayan",
    designation: "Professor",
    department: "Department of Mechanical",
    college: "K. Ramakrishnan College of Technology",
    specialization: "Design, Optimization, Analysis of Mechanism",
    linkedIn: "", // Replace with actual LinkedIn URL
  },
  {
    img: samSungTingImg, // Replace with actual image path
    imgAlt: "samSungTingSirImg",
    name: "Dr. Sam Sung Ting",
    designation: "Associate Professor",
    department: "Faculty of Chemical Engineering and Technology",
    college: "Universiti Malaysia Perlis",
    location: "Malaysia",
    specialization: "Material Science",
    linkedIn: "", // Replace with actual LinkedIn URL
  },
  {
    img: leeChangChuanImg, // Replace with actual image path
    imgAlt: "leeChangChuanSirImg",
    name: "Dr. Lee Chang Chuan",
    designation: "Associate Professor",
    department: "Faculty of Mechanical Engineering and Technology",
    college: "Universiti Malaysia Perlis",
    location: "Malaysia",
    linkedIn: "", // Replace with actual LinkedIn URL
  },
];

export const registrationGuidelines = `
### Registration Guidelines

1. **Registration should be completed only after the paper has been selected.**
2. Click the registration link, fill out the form, upload proof of payment, and submit before the specified deadline.
3. The registration fee includes:
   - Conference Kit
   - Refreshments and Lunch for both days
   - Participation Certificate
4. Please ensure that all details are accurate before submitting.
5. Registration details are provided below for reference.
6. **Note:** Early registration is encouraged to confirm your participation and ensure timely processing of materials.
`;

export const abstractGuidelines = `
### Abstract Submission Guidelines

- Authors are requested to prepare abstracts according to the provided template.
- [**Click here**](/ICIMME25_Abstract_Template.docx) to download the abstract template.
- Selected abstracts will be assigned unique paper IDs.
- Authors of selected abstracts will be invited to submit a full paper for peer review.
- The abstract of accepted papers will be published in the proceedings of the conference.
- Papers received after the deadline will not be included in the conference proceedings.
- The paper registered for the conference must be presented by one of the registered authors.
- Certificates of participation/presentation will be issued to the registered delegates/authors attending the conference.
- **Click below** to submit your abstract.
`;
