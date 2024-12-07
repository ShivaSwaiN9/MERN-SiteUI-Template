import React from "react";
import MainLayout from "../layouts/MainLayout";
import ContactUs from "../components/contact/ContactUs";
import CommonBreadCrumb from "../components/commonComponents/CommonBreadCrumb";
import Form from "../components/contact/Form";
import BreadCrumb from "../components/contact/BreadCrumb";


export default function contact() {
  return (
    <MainLayout>
    <BreadCrumb/>
      <ContactUs />
      <Form/>
    </MainLayout>
  );
}
