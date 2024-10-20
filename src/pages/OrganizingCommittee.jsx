import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import CommitteeCard2 from "../components/CommitteeCard2";
import { organizingCommittee } from "../constants";
import Heading from "../components/Heading";

const OrganizingCommittee = () => {
  return (
    <>
      <Navbar />
      <MainPoster />

      <div className="mt-20 px-4">
        <Heading title={"Organizing Committee"}></Heading>
      </div>
      <div className="bg-slate-100 mb-20 pb-10 text-center mx-auto">
        {organizingCommittee.map((committee) => (
          <div key={committee.category} className="">
            <h4 className="py-10 font-bold  max-sm:text-lg text-2xl mt-10">{committee.category}</h4>
            <section className="px-4 lg:px-10 max-container inline-flex gap-8 flex-wrap justify-center">
              {committee.members.map((member) => (
                <CommitteeCard2
                  key={member.name}
                  name={member.name}
                  designation={member.designation}
                />
              ))}
            </section>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default OrganizingCommittee;
