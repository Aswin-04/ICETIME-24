import ReactMarkdown from 'react-markdown'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import Heading from "../components/Heading";
import { conferenceAgenda1, conferenceAgenda2 } from '../constants';

const ProgramSchedule = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />
      <div className="mt-10 mb-6">
        <Heading title={"Program Schedule"}></Heading>
      </div>

      <h4 className='text-2xl font-bold text-center mb-2 '>DAY 1</h4>
      <p className='text-2xl font-bold  text-center mb-8 font-montserrat'>28<sup>th</sup> January 2024</p>
      <section className="max-container px-8 mb-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {conferenceAgenda1.map((item, index) => (
          <div
            key={index}
            className="bg-indigo-50 shadow-lg p-8 relative flex flex-col items-center justify-center text-center gap-2 mb-8 min-h-[30px]" // Set min height here
          >
            <h4 className="font-bold text-xl max-xs:text-lg">
              {item.timing}
            </h4>

            <p className="text-lg font-medium max-xs:text-base">{item.program}</p>
          </div>
        ))}
      </section>

      <h4 className='text-2xl font-bold text-center mb-2'>DAY 2</h4>
      <p className='text-2xl font-bold text-center mb-8 font-montserrat'>29<sup>th</sup> January 2024</p>
      <section className="max-container px-8 mb-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {conferenceAgenda2.map((item, index) => (
          <div
            key={index}
            className="bg-sky-100/70 shadow-lg p-8 relative flex flex-col items-center justify-center text-center gap-2 mb-8 min-h-[30px]" // Set min height here
          >
            <h4 className="font-bold text-xl max-xs:text-lg">
              {item.timing}
            </h4>

            <p className="text-lg font-medium max-xs:text-base">{item.program}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default ProgramSchedule;
