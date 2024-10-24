import Navbar from "../components/Navbar";
import MainPoster from "../components/MainPoster";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Heading from '../components/Heading'
import rpImg from '../assets/images/speakers/RP.jpeg'
const Speakers = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="my-10">
        <Heading title={'Speakers'}/>
      </div>
      <div className="my-20 flex justify-center items-center">
        <ProfileCard
          profile={{
            img: rpImg,
            imgAlt: "rpSirImg",
            name: "Dr. A. Rajendra Prasad",
            designation: "Dean of Student Affairs",
            linkedIn: "https://www.linkedin.com/in/arprasad225/",
          }}
        ></ProfileCard>
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;
