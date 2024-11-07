import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import RegistrationFeeTable from "../components/RegistrationFeeTable";
import BankDetailsTable from "../components/BankDetailsTable";
import Heading from "../components/Heading";
import { registrationGuidelines } from "../constants/";
import ReactMarkdown from "react-markdown";

const Registration = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="px-4 my-20">
        <Heading title={"Registration"}></Heading>
          <div className="flex justify-center">
            <RegistrationFeeTable />
          </div>
          <div className="bg-slate-100">
            <div className="max-container mt-20 mb-20 lg:mb-32 py-10 flex justify-center">
              <div className="px-8 prose  text-black max-xs:text-sm max-xs:leading-6 ">
                <ReactMarkdown>{registrationGuidelines}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold text-center mb-10">
            Payments can be done via NEFT(Net Banking /Google Pay/ PhonePe)
          </div>
          <div className="flex justify-center">
            <BankDetailsTable></BankDetailsTable>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
