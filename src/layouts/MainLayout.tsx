import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { bg_img } from "../assets/home";

type Prop = {
  title?: string;
  children: ReactElement | ReactElement[];
};

export default function MainLayout({ children, title = "Z plus security" }: Prop) {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-full"
    style={{ backgroundImage: `url(${bg_img.src})` }}>
      <Header />
      <>
        {children}
      </>
      <Footer />
    </div>
  );
}
