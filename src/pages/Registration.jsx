import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import RegistrationFeeTable from "../components/RegistrationFeeTable";

const Registration = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="max-container px-4 my-20 flex justify-center">
        <RegistrationFeeTable />
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
