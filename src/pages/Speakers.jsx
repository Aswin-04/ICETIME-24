import Navbar from "../components/Navbar";
import MainPoster from "../components/MainPoster";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Heading from '../components/Heading'
import rpImg from '../assets/images/speakers/RP.jpeg'
import { speakers } from "../constants";

const Speakers = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="mt-10">
        <Heading title={'Speakers'}/>
      </div>
      <div className="mb-20">
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {speakers.map((profile) => (
              <ProfileCard profile={profile} key={profile.name} />
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Speakers;
