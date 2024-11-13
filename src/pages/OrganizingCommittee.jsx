import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import ProfileCard2 from "../components/ProfileCard2";
import { chiefPatronProfiles, patronProfiles, chairProfiles, convenorProfiles, coConvenorProfiles, organizingSecretaryProfiles } from "../constants";
import Heading from "../components/Heading";

const OrganizingCommittee = () => {
  return (
    <>
      <Navbar />
      <MainPoster />

      <div className="mt-20 px-4">
        <Heading title={"Organizing Committee"}></Heading>
      </div>

      <div className="space-y-20 my-20">
        <div>
          <h4 className="text-center font-bold text-xl md:text-2xl uppercase">Chief Patron</h4>
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {chiefPatronProfiles.map((profile) => (
              <ProfileCard2 profile={profile} key={profile.name} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-center font-bold text-xl md:text-2xl uppercase">Patron</h4>
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {patronProfiles.map((profile) => (
              <ProfileCard2 profile={profile} key={profile.name} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-center font-bold text-xl md:text-2xl uppercase">Organizing Chair</h4>
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {chairProfiles.map((profile) => (
              <ProfileCard2 profile={profile} key={profile.name} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-center font-bold text-xl md:text-2xl uppercase">Convenor</h4>
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {convenorProfiles.map((profile) => (
              <ProfileCard2 profile={profile} key={profile.name} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-center font-bold text-xl md:text-2xl uppercase">Co Convenor</h4>
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {coConvenorProfiles.map((profile) => (
              <ProfileCard2 profile={profile} key={profile.name} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-center font-bold text-xl md:text-2xl uppercase">Organizing Secretary</h4>
          <div className="max-container flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {organizingSecretaryProfiles.map((profile) => (
              <ProfileCard2 profile={profile} key={profile.name} />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default OrganizingCommittee;
