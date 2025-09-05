import React from 'react'
import HeaderForum from '../components/HeaderForum'
import FooterForum from '../components/FooterForum'
import FooterSection from '../components/footerf/FooterSection'
import { GlobalTransitionProvider } from '../../main/components/TransitionReveal'

const ForumLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <GlobalTransitionProvider>
      <div className='flex flex-col min-h-screen bg-black'>
        <HeaderForum />
        <div className=''>
          {children}
        </div>
        <FooterSection />
      </div>
    </GlobalTransitionProvider>
  )
}

export default ForumLayout