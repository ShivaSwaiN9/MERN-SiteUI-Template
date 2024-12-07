import React from "react";
import MainLayout from "../layouts/MainLayout";
import CommonBreadCrumb from "../components/commonComponents/CommonBreadCrumb";
import OurServices from "../components/services/OurServices";


const data = { 
    title: 'Our services',
    cont1: "Home",
    cont2: "Services Page"
  }
  

export default function services() {
  return (
    <MainLayout>
      <CommonBreadCrumb data={data} />
      <OurServices/>
    </MainLayout>
  );
}
