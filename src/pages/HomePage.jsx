import Navbar from "../components/Navbar";
import MainPoster from '../components/MainPoster'

import { aboutDetails } from "../constants";
import AboutDetailsRenderer from "../components/AboutDetailsRenderer";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <MainPoster/>

        {aboutDetails.map((details) => (
          <div className="bg-gray-100 mt-10 lg:mt-20 mb-20" key={details.id}>
            <Heading title={details.title}></Heading>
            <AboutDetailsRenderer
              content={details.content}
              img={details.img}
              imgAlt={details.imgAlt}
            />
          </div>
        ))}
        <Footer></Footer>
      </main>
    </>
  );
};

export default HomePage;
