import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MainPoster from "../components/MainPoster"
import CommitteeCard from "../components/CommitteeCard"
import { internationalAdvisoryCommittee, nationalAdvisoryCommittee } from "../constants"
import Heading from '../components/Heading'

const AdvisoryCommittee = () => {
  return (
    <>
    <Navbar/>
    <MainPoster/>

    <div className="mt-20 px-4">
      <Heading title={'International Advisory Committee'}></Heading>
    </div>
    <div className="bg-slate-100 py-10">
      <section className="padding-x max-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  auto-rows-fr gap-8 ">
      {internationalAdvisoryCommittee.map((member) => (
        <CommitteeCard key={member.name}  name={member.name} designation={member.designation}/>
      ))}

      </section>
    </div>


    <div className="mt-20 px-4">
      <Heading title={'National Advisory Committee'}></Heading>
    </div>
    <div className="bg-slate-100 py-10">
      <section className="padding-x max-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  auto-rows-fr gap-8 ">
      {nationalAdvisoryCommittee.map((member) => (
        <CommitteeCard key={member.name}  name={member.name} designation={member.designation}/>
      ))}
      </section>
    </div>
    <Footer/>
  </>
  )
}

export default AdvisoryCommittee
