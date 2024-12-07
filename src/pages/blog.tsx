import React from "react";
import MainLayout from "../layouts/MainLayout";
import Post from "../components/blog/Post";
import CommonBreadCrumb from "../components/commonComponents/CommonBreadCrumb";

const data = { 
  title: 'Blog',
  cont1: "Home",
  cont2: "Blog pages"
}

export default function blog() {
  return (
    <MainLayout>
     <CommonBreadCrumb data = {data}/>
      <Post/>
    </MainLayout>
  );
}
