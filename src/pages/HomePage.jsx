import Navbar from "../components/Navbar"
import bannerImg from "../assets/home-banner.jpg"

const HomePage = () => {
  return (
  <>
    <Navbar/>
    <main className="max-container">
      <section className="">
        <img className="" src={bannerImg} alt="" />
      </section>
      <section className="padding-t "></section>
    </main>
  </>
  )
}

export default HomePage
