import Navbar from "../components/Navbar";
import { mainPoster } from "../assets/images";

import { aboutDetails } from "../constants";
import AboutDetailsRenderer from "../components/AboutDetailsRenderer";
import Heading from "../components/Heading";

const collegeDescription = `Sri Sai Ram Engineering College, a BIS/EOMS ISO 21001:2018 certified institution, was established by Founder Chairman MJF. Ln. Leo Muthu in 1995. All the eligible engineering programs are accredited by the National Board of Accreditation (NBA) and also accredited by NAAC with an 'A+' grade. The college is situated in a sylvan environment and offers sixteen UG courses and six PG courses in engineering, technology, and management, with a strength of over 5000 students. 

The institution has grown and is recognized among the reputed institutions in Tamil Nadu in a short span of time, owing to the highest degree of commitment and enthusiasm of the staff and management. With the motto, "Prosperity through quality education," the institution disseminates knowledge and entrepreneurship skills among students and strives to achieve excellence in the fields of technical, computer, and management education. The college is among the top colleges in Tamil Nadu. 

In the NIRF ranking among engineering colleges in India, Sri Sai Ram Engineering College, Chennai, was positioned in 157th place in 2022. The college has adopted the 'Sustainable Development Goals (SDG)' in all activities to create awareness and build a sense of responsibility towards society in the minds of budding engineers, working to build a better world. The college has highly qualified and dedicated professors guiding various socially relevant projects, funded through state and central government agencies like DST, AICTE, DRDO, CSIR, and MHRD, and publishing research outputs in various national and international journals.`;

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <section className="">
          <img className="" src={mainPoster} alt="" />
        </section>

        {aboutDetails.map((details) => (
          <div className="bg-gray-100 mt-10 lg:mt-20" key={details.id}>
            <Heading title={details.title}></Heading>
            <AboutDetailsRenderer
              content={details.content}
              img={details.img}
              imgAlt={details.imgAlt}
            />
          </div>
        ))}

        {/* <div className="bg-gray-100 mt-10 lg:mt-20">
          <Heading title={"About College"}></Heading>
          <AboutDetailsRenderer
            content={collegeDescription}
            img={clgImg}
            imgAlt={"clgImg"}
          />
        </div>

        <div className="bg-gray-100 mt-10 lg:mt-20">
          <Heading title={"About College"}></Heading>
          <AboutDetailsRenderer
            content={collegeDescription}
            img={clgImg}
            imgAlt={"clgImg"}
          />
        </div>

        <div className="bg-gray-100 mt-10 lg:mt-20">
          <Heading title={"About College"}></Heading>
          <AboutDetailsRenderer
            content={collegeDescription}
            img={clgImg}
            imgAlt={"clgImg"}
          />
        </div> */}
      </main>
    </>
  );
};

export default HomePage;
