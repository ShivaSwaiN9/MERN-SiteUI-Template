import BreadCrumb from "../components/home/BreadCrumb";
import OurApproach from "../components/home/OurApproach";
import OurValues from "../components/home/OurValues";
import WhyChooseUs from "../components/home/WhyChooseUs";
import WhyWeAre from "../components/home/WhyWeAre";
import MainLayout from "../layouts/MainLayout";


export default function Home() {
  return (
   <MainLayout>
   <BreadCrumb/>
   <WhyChooseUs/>
   <OurApproach/>
   <WhyWeAre/>
   <OurValues/>
   </MainLayout>
  );
}

