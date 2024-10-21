import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import { importantDates } from "../constants";
import Heading from '../components/Heading'

const ImportantDates = () => {
  return (
    <div>
      <Navbar />
      <MainPoster />

      <div className="my-10">
        <Heading title={'Important Dates'}/>

      </div>
      <section className="max-container px-8 mb-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {importantDates.map((item, index) => (
          <div
            key={index}
            className="bg-sky-100/70 shadow p-8 relative flex flex-col items-center justify-center text-center gap-2 mb-8 min-h-[30px]" // Set min height here
          >

            <span className="absolute -top-[30px] rounded-full border-[6px] border-bgd bg-sky-500 p-2 flex items-center justify-center">
              <item.icon sx={{ fontSize: 30, color: "white" }} />
            </span>


            <h4 className="font-bold text-xl max-xs:text-lg">
              {item.date}
            </h4>

            <p className="text-lg max-xs:text-base">{item.deadline}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default ImportantDates;
