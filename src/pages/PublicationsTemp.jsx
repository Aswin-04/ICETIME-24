import React from 'react'
import Navbar from '../components/Navbar'
import MainPoster from '../components/MainPoster'
import Footer from '../components/Footer'
import {  
  aipLogo,
  springerLogo,
  etsLogo,
} from '../assets/images'
import Heading from "../components/Heading"

const PublicationsTemp = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainPoster></MainPoster>
      <div className="mt-10">
        <Heading title={"Publications"}></Heading>
      </div>
      <div className="bg-slate-100">
        <div className="max-container mb-20 lg:mb-32 py-10 flex flex-col items-center gap-12">
          <p className='text-2xl font-medium'>Accepted papers will be published in one of the journals listed below</p>
          <img src={aipLogo} alt="aipLogo" width={500} height={500}/>
          <img src={etsLogo} alt="e3sLogo" width={500} height={500}/>
          <img src={springerLogo} alt="springerLogo" width={500} height={500}/>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default PublicationsTemp