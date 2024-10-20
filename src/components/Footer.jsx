import { sairamIcon } from "../assets/images";
import { quickLinks } from "../constants";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 font-sans">
      <div className=" padding-x py-12 sm:pt-24 max-container flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-0 wide:justify-around">
        <div className="w-40 shadow bg-white rounded flex h-16">
          <img src={sairamIcon} alt="sairamIcon" className="object-contain" />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className=" text-2xl leading-normal font-montserrat font-medium">
            Location
          </h4>

          <div className="mt-2">
            <p className=" text-slate-700 hover:text-slate-950 leading-7 transition duration-250 ease-in-out">
              {"📍 "}
              <a
                href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/@12.9606025,80.0563133,17.72z/data=!4m6!3m5!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!8m2!3d12.9602171!4d80.0574071!16s%2Fm%2F02ppmyg?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Sri Sai Ram Engineering College, <br />
                Sai Leo Nagar, West Tambaram <br />
                Chennai - 600 044 <br />
                Tamilnadu <br />
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-montserrat text-2xl leading-normal font-medium">
            {quickLinks.title}
          </h4>
          <ul className="space-y-2">
            {quickLinks.links.map((link) => (
              <li
                key={link.label}
                className=" text-slate-700 hover:text-slate-950 transition duration-250 ease-in-out"
              >
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className=" text-2xl leading-normal font-montserrat  font-medium">
            Reach Us
          </h4>

          <ul className="font-sans">
            <li className="mb-1 flex items-center gap-2  text-slate-700 hover:text-slate-950 transition duration-250 ease-in-out cursor-pointer">
              <InstagramIcon fontSize="medium" />
              <a
                href="https://www.instagram.com/sairam_mech?igsh=Zzh1dmMzbjNlYjd3"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-8"
              >
                @sairam_mech
              </a>
            </li>
            <li className="mb-1 pl-[2px] flex items-center gap-x-2 text-slate-700 hover:text-slate-950 transition duration-250 ease-in-out">
              <Mail size={22} />
              <p className="pl-[2px]">icetime@sairam.edu.in</p>
            </li>
          </ul>
        </div>
      </div>


      <div className="flex flex-col md:justify-center md:items-center border padding-x py-8 border-x-0 border-gray-300 md:text-center shadow-lg">

        <div className="flex gap-2">
          <a
            href="https://www.instagram.com/sairam_mech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              fontSize="large"
              sx={{
                color: "#334155",
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#020617", 
                 },
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/sairam-mechanical-engineering/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              fontSize="large"
              sx={{
                color: "#334155",
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#020617",                
                },
              }}
            />
          </a>
          <a
            href="https://www.youtube.com/@sairammechanicalofficial8424"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon
              sx={{
                color: "#334155",
                fontSize: 46,
                paddingBottom: 1,
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#020617",                
                },
              }}
            />
          </a>
          <a
            href="https://www.facebook.com/sairamecmech?mibextid=qi2Omg&rdid=6tTnLAW1kU7pwNuO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FmPf3KkcC7Kqgxpet%2F%3Fmibextid%3Dqi2Omg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              fontSize="large"
              sx={{
                color: "#334155",
                // fontSize: 46,
                // paddingBottom: 1,
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#020617",
                },
              }}
            />
          </a>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
