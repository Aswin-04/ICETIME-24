import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainPoster from "../components/MainPoster";
import Heading from "../components/Heading";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () => {
  return (
    <>
      <Navbar />
      <MainPoster />
      <div className="mt-10">
        <Heading title={"Contact"}></Heading>
      </div>
      <div className="">
        <section className="mb-20  px-6  py-6 ">
          <div className="font-montserrat font-medium max-container flex justify-center">
            <div>
              <div className="max-w-md bg-slate-100 shadow-lg p-8  flex flex-col gap-2 mb-8 min-h-[30px]">
                <h5 className="text-xl font-semibold">Convenor</h5>
                <p className="sm:text-lg">
                  ICIMME'25, Department of Mechanical Engineering
                  <br />
                  Sri Sai Ram Engineering College, Chennai.
                </p>
              </div>
              <div className="max-w-md flex  items-center gap-4 bg-slate-100 shadow-lg p-8 min-h-[30px] mb-8">
                <div className=" text-sky-500">
                  <PhoneIcon sx={{ fontSize: 32 }} />
                </div>
                <p className="sm:text-lg">
                  +91 9486784878 <br /> (Dr. R. Bhoopathi)
                </p>
              </div>
              <div className="max-w-md flex  items-center gap-4 bg-slate-100 shadow-lg p-8 min-h-[30px] mb-8">
                <div className=" text-sky-500">
                  <PhoneIcon sx={{ fontSize: 32 }} />
                </div>
                <p className="sm:text-lg">
                  +91 94867 84878 <br /> (Dr. C. Parswajinan)
                </p>
              </div>
              <div className="max-w-md flex  items-center gap-4 bg-slate-100 shadow-lg p-8 min-h-[30px] mb-8">
                <div className=" text-sky-500">
                  <PhoneIcon sx={{ fontSize: 32 }} />
                </div>
                <p className="sm:text-lg">
                  +91 99448 81995 <br /> (Mr. A. Ravinthiran)
                </p>
              </div>
              <div className="max-w-md flex  items-center gap-4 bg-slate-100 shadow-lg p-8 min-h-[30px] mb-10">
                <div className=" text-sky-500">
                  <EmailIcon sx={{ fontSize: 32 }} />
                </div>
                <p className="sm:text-lg">icimme@sairam.edu.in</p>
              </div>
              <div className="max-w-md flex flex-col items-center gap-4 bg-slate-100 shadow-lg p-8 min-h-[30px] ">
                <div className="text-sky-500">
                  <PlaceIcon sx={{ fontSize: 36 }} />
                </div>
                <h5 className="text-xl font-semibold">Our Address</h5>
                <a
                href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/@12.9606025,80.0563133,17.72z/data=!4m6!3m5!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!8m2!3d12.9602171!4d80.0574071!16s%2Fm%2F02ppmyg?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                Sri Sai Ram Engineering College, <br />
                Sai Leo Nagar, West Tambaram <br />
                Chennai - 600 044 <br />
                Tamilnadu <br />
              </a>
              </div>
            </div>
          </div>
        </section>
        <div className="max-container mb-20">
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780386285!2d80.05483217585329!3d12.960217087354032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1729604374415!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;
