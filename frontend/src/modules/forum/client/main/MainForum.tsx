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
import PostsSection from './components/PostsSection'
import BookShelf from './components/BookShelf'
// import TransitionReveal from './components/TransitionReveal'
import TransitionDemo from './components/TransitionDemo'

const MainForum = () => {
  return (
    <div>
      <div className=''>
        {/* <BannerForum /> */}
        <BannerHome/>
        <Introduce/>
        {/* <TransitionDemo/> */}
        {/* Test bookshelf */}
        {/* <div className='mt-[200vh]'></div> */}
        <BookShelf/>
        <EventSection/>
        <BenefitsSection/>
        <TopDonate/>
        <AboutUs/>
        <PostsSection/>
        <FAQSection/>
        <Contact/>
      </div>
    </div>
  )
}

export default MainForum