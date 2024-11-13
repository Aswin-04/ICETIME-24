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
            <div className="text-2xl font-semibold text-center my-4">Registration Fee</div>
            <RegistrationFeeTable />
          </div>
          <div className="my-20 flex justify-center">
            <a href="https://forms.gle/DAn3YzsSMFwWhD6n9" target="_blank" rel="noopener noreferrer">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                {"Register here ->"}
              </button>
            </a>
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
