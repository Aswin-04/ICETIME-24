import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import MainPoster from "../components/MainPoster"
import { publicationProcess } from "../constants"
import Heading from "../components/Heading"
import ReactMarkdown from "react-markdown"

const PublicationProcess = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainPoster></MainPoster>
      <div className="mt-10">
        <Heading title={publicationProcess.label}></Heading>
      </div>
      <div className="bg-slate-100">
        <div className="max-container mb-20 lg:mb-32 py-10 flex justify-center">
          <div className="px-8 prose  text-black max-xs:text-sm max-xs:leading-6">
            <ReactMarkdown>{publicationProcess.content}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PublicationProcess