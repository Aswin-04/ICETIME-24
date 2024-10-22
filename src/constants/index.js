import { clgImg, departmentImg } from "../assets/images";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

export const internationalAdvisoryCommittee = [
  { "name": "Dr. Tariq Darabseh", "designation": "Jordan University of Science and Technology" },
  { "name": "Prof. Mohammad Reza Eslami", "designation": "Amirkabir University of Technology, Iran" },
  { "name": "Ir. Dr. Masri Bin Baharom", "designation": "Head of Mechanical Engineering Department, Universiti Teknologi PETRONAS (UTP), Malaysia" },
  { "name": "Prof. Ashraf A Shikdar", "designation": "Sultan Qaboos University" },
  { "name": "Prof. Naser S. Al-Huniti", "designation": "University of Jordan, Jordan" },
  { "name": "Dr. Peter Neilsen", "designation": "Aalborg University, Denmark" },
  { "name": "Mr. Chinna Chinnakaruppan", "designation": "CAC Business Solutions, U.S.A" },
  { "name": "Mr. S. Ganesh", "designation": "President, AMTEC Precision, USA" },
  { "name": "Dr. Yousef Amer", "designation": "Program Director at University of South Australia" },
  { "name": "Dr. A. Senthikumar", "designation": "National University of Singapore, Singapore" },
  { "name": "Dr. (Ing) Christian Oliver Paschereit", "designation": "Hermann Fottinger Institute (HFI) for Fluid Dynamics and Technical Acoustics, TU Berlin" },
  { "name": "Tajul Ariffin B Shamsuddin", "designation": "Senior Executive, Universiti Teknologi Petronas, Malaysia" },
  { "name": "Dr. Vijanth Sagayan Asirvadam", "designation": "Associate Professor, Universiti Teknologi Petronas, Malaysia" },
  { "name": "Prof. Paulo Davam", "designation": "University of Aveiro, Portugal" },
  { "name": "F.T.S. Chan", "designation": "Hong Kong Polytechnic College, Hong Kong" },
  { "name": "Yung-Tien Liu", "designation": "Professor, Dr. Eng. National Kaohsiung First University of Science and Technology, Taiwan" },
  { "name": "Prof. Khaled Abou-El-Hossein", "designation": "Director, NMMU, South Africa" },
  { "name": "Prof. Tapas Mallick", "designation": "University of Exeter, UK" },
  { "name": "S. Nachiappan", "designation": "University of Nottingham Ningbo, China" },
  { "name": "M.M. Noor", "designation": "University Malaysia Pahang (UMP), Malaysia" },
  { "name": "Dr. B.V. Reddy", "designation": "UOIT, Canada" }
];


export const nationalAdvisoryCommittee = [
  { "name": "Dr. Anand Goyal", "designation": "Vice-Chancellor, A.P.Goyal Shimla University, Shimla" },
  { "name": "Dr. Atmananad", "designation": "Director, National Institute of Ocean Technology, Chennai" },
  { "name": "Dr. Azad", "designation": "Director, Centre for International Affairs, Anna University, Chennai" },
  { "name": "Prof. B.V. Babu", "designation": "Vice Chancellor, Galgotia University, Noida" },
  { "name": "Dr. Balasubramaniam V.", "designation": "Annamalai University, Chidambaram" },
  { "name": "Dr. Dhanalakshmi V.", "designation": "TCE, Madurai" },
  { "name": "Dr. Gajendran S.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Gobinath Chintala", "designation": "Alliance University, Karnataka" },
  { "name": "Dr. Jayavel S.", "designation": "IITD & M, Chennai" },
  { "name": "Dr. Jeyapaul R.", "designation": "NIT, Trichy" },
  { "name": "Dr. Jose Mathew", "designation": "NIT Calicut" },
  { "name": "Dr. Karunamoorthy L.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Kalichelvan K.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Thanigaiarasu S.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Kesavan R.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Lenin Babu", "designation": "VIT, Chennai" },
  { "name": "Dr. Loganathan M.", "designation": "Annamalai University, Chidambaram" },
  { "name": "Mr. V. Balajikrishna", "designation": "Vice-President, Brakes India Pvt. Ltd., Chennai" },
  { "name": "Dr. K. Palanikuamr", "designation": "Principal, Sri Sairam Institute of Technology, Chennai" },
  { "name": "Dr. Manoharan N.", "designation": "AMET University, Chennai" },
  { "name": "Dr. Mohan B.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Moorthy B.S.", "designation": "IIT, Chennai" },
  { "name": "Dr. Murugan N.", "designation": "CIT, Coimbatore" },
  { "name": "Dr. Murugan S.", "designation": "NIT, Rourkela" },
  { "name": "Dr. Narendiran T.T.", "designation": "IIT, Chennai" },
  { "name": "Dr. T. Sekar", "designation": "TPGIT, Vellore" },
  { "name": "Dr. Prabakaran S.", "designation": "Mepco, Sivakasi" },
  { "name": "Dr. Rajadurai A.", "designation": "Anna University, Chennai" },
  { "name": "Dr. Rajan T.P. D.", "designation": "NIIST, Trivandrum" },
  { "name": "Dr. Rajaram", "designation": "B.S.Abdul Rahman University, Chennai" },
  { "name": "Dr. Rajesekaran S.", "designation": "SRM University, Chennai" },
  { "name": "Dr. Rajesh R.", "designation": "Noorul Islam University, Kanyakumari" },
  { "name": "Dr. Ramachandran S.", "designation": "Sathyabama University, Chennai" },
  { "name": "Dr. S. Radhakrishnan", "designation": "Director, R & D MIT, Pune" },
  { "name": "Dr. Ganesh Sundaraman", "designation": "IIT, Chennai" },
  { "name": "Dr. S.K. Kautish", "designation": "Principal, North West Engineering & Technology, Moga (Punjab)" },
  { "name": "Dr. Senthil R.", "designation": "Anna University, Villupuram" },
  { "name": "Dr. Senthilvelan S.", "designation": "IIT, Guwahati" },
  { "name": "Dr. Senthilvelan T.", "designation": "PEC, Pondicherry" },
  { "name": "Dr. Shunmugam S.", "designation": "NIT, Trichy" },
  { "name": "Dr. Udaya Kumar M.", "designation": "Kalasalingam University, Krishnankoil" },
  { "name": "Dr. Vijaya Raghavan L.", "designation": "IIT, Chennai" },
  { "name": "Dr. Vijaya Kumar S.", "designation": "Anna University, Kanchipuram" },
  { "name": "Shri Banerjee A.J.", "designation": "CMERI, Durgapur" },
  { "name": "Dr. N. Gowri Shankar", "designation": "India Pistons Ltd., Chennai" },
  { "name": "Dr. Krishnakumar S.", "designation": "Senior Officer, DRDO" },
  { "name": "Dr. J. Jayaprakash", "designation": "Professor, MGR University" },
  { "name": "Prof. Dr. P.K. Prasad", "designation": "Principal, Bengal College of Engineering & Technology, Durgapur, West Bengal" },
  { "name": "Dr. Pradeep Jaevandhiya", "designation": "Principal, Pankaj Laddhad Institute of Technology and Management Studies, Buldana" }
]


export const organizingCommittee = [
  {
    "category": "PATRON",
    "members": [
      {
        "name": "Dr. Sai Prakash Leo Muthu",
        "designation": "Chairman & CEO"
      },
      {
        "name": "Dr. J. Raja",
        "designation": "Principal"
      }
    ]
  },
  {
    "category": "CHAIR",
    "members": [
      {
        "name": "Dr. A Rajendra Prasad",
        "designation": "Dean - Student Affairs"
      }
    ]
  },
  {
    "category": "CONVENOR",
    "members": [
      {
        "name": "Dr. B. Vijaya Ramnath",
        "designation": "Professor & Head"
      }
    ]
  },
  {
    "category": "CO-CONVENOR",
    "members": [
      {
        "name": "Dr. V. Ravi Raj",
        "designation": "Associate Professor"
      },
      {
        "name": "Dr. R. Bhoopathi",
        "designation": "Associate Professor"
      },
      {
        "name": "Dr. C. Parswajinan",
        "designation": "Associate Professor"
      }
    ]
  },
  {
    "category": "ORGANIZING SECRETARY",
    "members": [
      {
        "name": "Mr. S. Krishnaraj",
        "designation": "Associate Professor"
      },
      {
        "name": "Mr. R. Senthil Kumar",
        "designation": "Associate Professor"
      },
      {
        "name": "Mr. A. Ravinthiran",
        "designation": "Assistant Professor"
      },
      {
        "name": "Mr. L. Ravikumar",
        "designation": "Assistant Professor"
      },
      {
        "name": "Mr. M. Sudhakar",
        "designation": "Assistant Professor"
      }
    ]
  }
]

export const importantDates = [
  {
    deadline: "Last Date to Submit Abstract",
    date: "20th November 2024",
    icon: DriveFolderUploadIcon 
  },
  {
    deadline: "Abstract Selection Intimation",
    date: "25th November 2024",
    icon: CheckCircleOutlineIcon 
  },
  {
    deadline: "Last Date to Submit Full Paper",
    date: "15th December 2024",
    icon: DescriptionIcon 
  },
  {
    deadline: "Full Paper Selection Intimation",
    date: "25th December 2024",
    icon: CheckCircleOutlineIcon 
  },
  {
    deadline: "Payment Last Date",
    date: "28th December 2024",
    icon: CreditCardIcon 
  },
  {
    deadline: "Registration Commences",
    date: "28th December 2024",
    icon: EventAvailableIcon 
  },
  {
    deadline: "Registration Ends",
    date: "12th January 2025",
    icon: AccessTimeIcon
  }
];


export const conferenceTracks = `
### ADVANCEMENT IN MECHANICAL ENGINEERING
- Cyber-Physical Systems in Mechanical Engineering
- Advanced Control Strategies for Mechanical Systems
- Aerospace Engineering and Innovations
- Digital Twin Technologies in Mechanical Engineering
- Human-Centered Design and Engineering
- Wearable Technologies and Human Augmentation
- Artificial Intelligence and Machine Learning in Mechanical Engineering
- Sustainable Transportation Systems and Infrastructure
- Industrial IoT and Smart Manufacturing
- Innovations in HVAC Systems and Indoor Air Quality
- Marine Engineering and Naval Architecture Innovations
- Resilient Infrastructure and Disaster Mitigation
- Sustainable Agriculture and Farming Technologies
- Advances in Composite Materials and Structures
- Cybersecurity Challenges in Mechanical Systems
- Smart Sensors and Sensor Networks in Mechanical Systems
- Advances in Sustainable Construction and Building Technologies
- Innovations in Sustainable Packaging and Logistics
- Human-Robot Collaboration in Industrial Settings
- Advances in Bio-inspired Robotics and Biomimetics
- Digital Transformation in Mechanical Engineering Education
- Innovations in Disaster Response and Recovery Technologies
- Advances in Microfluidics and Nanofluidics
- Innovations in Heat Exchangers and Heat Transfer Systems
- Cyber-Physical Manufacturing Systems and Industry 4.0
- Innovations in Energy Harvesting and Energy Conversion
- Sustainable Mining and Resource Extraction Technologies
- Advances in Tribology and Surface Engineering
- Innovations in Space Exploration and Aerospace Technologies

### MATERIALS & MANUFACTURING
- Sustainable Manufacturing and Design Innovations
- Advanced Materials and Manufacturing Processes
- Smart Mechanical Engineering Systems
- Additive Manufacturing and 3D Printing Technologies
- Nanotechnology Applications in Mechanical Engineering
- Materials Engineering for Extreme Environments
- Advances in Non-Destructive Testing Techniques
- Smart Cities and Infrastructure Development
- Innovations in Agricultural Machinery and Equipment
- Advances in Microelectromechanical Systems (MEMS)

### DESIGN & AUTOMATION
- Robotics and Automation in Mechanical Engineering
- Innovative Approaches to Vehicle Dynamics
- Advances in Fluid Mechanics and Aerodynamics
- Emerging Trends in Robotics and Mechatronics

### ENERGY AND ENVIRONMENT
- Wind and Water Turbine
- Solar Energy Power Generation
- Energy Efficiency and Renewable Energy Technologies
- Green Technologies and Environmental Sustainability
- Sustainable Energy Systems and Power Generation
- Renewable Energy Integration and Grid Management
- Sustainable Urban Development and Transportation
- Sustainable Water Management and Treatment Technologies
- Innovations in Renewable Energy Storage Systems
- Sustainable Waste Management and Recycling Solutions

### THERMAL SCIENCES
- Computational Mechanics and Simulation Techniques
- Innovations in Thermal Management Systems
- Biologically Inspired Engineering Solutions
- Computational Intelligence in Mechanical Engineering
- Innovations in Thermal Energy Storage Systems
`;
