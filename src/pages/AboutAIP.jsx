import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import MainPoster from "../components/MainPoster"
import { aboutAIP } from "../constants"
import Heading from "../components/Heading"
import ReactMarkdown from "react-markdown"
import { aipLogo } from "../assets/images"

const AboutAIP = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainPoster></MainPoster>
      <div className="mt-10">
        <Heading title={aboutAIP.label}></Heading>
      </div>
      <div className="bg-slate-100">
        <div className="max-container mb-20 lg:mb-32 py-10 flex flex-col justify-center items-center gap-10">
          <div className="max-w-lg px-4">
            <img src={aipLogo} alt="AIP-Logo" />
          </div>
          <div className="px-8 prose  text-black max-xs:text-sm max-xs:leading-6">
            <ReactMarkdown>{aboutAIP.content}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutAIP