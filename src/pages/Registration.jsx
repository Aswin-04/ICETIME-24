import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import RegistrationFeeTable from "../components/RegistrationFeeTable";
import BankDetailsTable from '../components/BankDetailsTable'
import Heading from '../components/Heading'


const Registration = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="max-container px-4 my-20">
        <Heading title={"Registration"}></Heading>
        <div className="flex flex-col items-center gap-10">
          <div>
            <RegistrationFeeTable />
          </div>
          <div className="">
            <BankDetailsTable></BankDetailsTable>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
