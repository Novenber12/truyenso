import React from 'react'
import BannerForum from './components/BannerForum'
import BannerHome from './components/BannerHome'
import Introduce from './components/SectionNoFramer/Introduce'
import BenefitsSection from './components/SectionNoFramer/BenefitsSection'
import TopDonate from './components/SectionNoFramer/TopDonate'
import FAQSection from './components/SectionNoFramer/FAQSection'
import Contact from './components/SectionNoFramer/Contact'
import AboutUs from './components/AboutUs'
import EventSection from './components/Event'

const MainForum = () => {
  return (
    <div>
      <div className=''>
        {/* <BannerForum /> */}
        <BannerHome/>
        <Introduce/>
        <EventSection/>
        <BenefitsSection/>
        <TopDonate/>
        {/* <AboutUs/> */}
        <AboutUs/>
        <FAQSection/>
        <Contact/>
      </div>
    </div>
  )
}

export default MainForum