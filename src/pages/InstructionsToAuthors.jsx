import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import Heading from "../components/Heading";
import { instructionsToAuthors } from "../constants";

const InstructionsToAuthors = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="mt-10">
        <Heading title={"Instructions to Authors"}></Heading>
      </div>
      <div className="bg-slate-100">
        <div className="max-container mb-20 py-10 flex justify-center ">
          <div className="px-8 prose prose-headings:text-center  text-black max-xs:text-sm max-xs:leading-6">
            <ReactMarkdown>{instructionsToAuthors}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructionsToAuthors;
