import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import ReactMarkdown from "react-markdown";
import { conferenceTracks } from "../constants";
import Heading from "../components/Heading";

const CallForPapers = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainPoster></MainPoster>
      <div className="mt-10">
        <Heading title={"Call for Papers"}></Heading>
      </div>
      <div className="mb-20 px-4 py-10 flex justify-center  border bg-slate-100">
        <div className="prose max-container text-black max-xs:text-sm max-xs:leading-6">
          <ReactMarkdown>{conferenceTracks}</ReactMarkdown>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CallForPapers;
