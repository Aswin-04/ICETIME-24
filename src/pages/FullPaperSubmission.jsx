import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import Heading from "../components/Heading";
import { fullPaperSubmissionGuidelines } from "../constants";

const FullPaperSubmission = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="mt-10">
        <Heading title={"Full Paper Submission"}></Heading>
      </div>
      <div className="bg-slate-100">
        <div className="max-container mb-20 py-10 flex flex-col items-center ">
          <div className="px-8 prose prose-headings:text-center  text-black max-xs:text-sm max-xs:leading-6">
            <ReactMarkdown>{fullPaperSubmissionGuidelines}</ReactMarkdown>
          </div>
          <div className="mt-10">
            <a href="https://forms.gle/GbeBjHDkvjJBMXZ69" target="_blank" rel="noopener noreferrer">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                {"Submit Paper ->"}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullPaperSubmission;
