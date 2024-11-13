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
          <div className="bg-slate-100">
            <div className="max-container mb-10 py-10 flex justify-center">
              <div className="px-8 prose  text-black max-xs:text-sm max-xs:leading-6 ">
                <ReactMarkdown>{registrationGuidelines}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-20 gap-4">
            <div className="font-bold text-xl">Registration Fee</div>
            <RegistrationFeeTable />
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
