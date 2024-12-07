import React from 'react'
import MainLayout from '../layouts/MainLayout'
import CybersecurityOperation from '../components/about/CybersecurityOperation'
import CommonBreadCrumb from '../components/commonComponents/CommonBreadCrumb'

const data = { 
  title: 'About Us',
  cont1: "Home",
  cont2: "About"
}

export default function about() {
  return (
  <MainLayout>
    <CommonBreadCrumb data={data}/>
    <CybersecurityOperation/>
  </MainLayout>
  )
}
