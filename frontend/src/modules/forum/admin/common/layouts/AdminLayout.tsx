import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import FooterAdmin from '../components/FooterAdmin'
import MenuAdmin from '../components/MenuAdmin'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div>
        <MenuAdmin />
        <main>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-2'>
                    <SidebarAdmin />
                </div>
                <div className='col-span-10'>
                    {children}
                </div>
            </div>
        </main>
        <FooterAdmin />
    </div>
  )
}

export default AdminLayout
