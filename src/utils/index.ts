import { footerArrType, navArrType, WhyWeAreType } from "./../types/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PollIcon from "@mui/icons-material/Poll";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import WebhookIcon from "@mui/icons-material/Webhook";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TuneIcon from "@mui/icons-material/Tune";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

export const ApproachiconArr = [
  {
    id: 1,
    title: "Direct Operation Phase",
    icon: GppGoodOutlinedIcon,
    desc: "where the client receives close protection e.g. collection from airport, movements towards or from accompanying convoy and walking to the subsequent venue",
    // path: "/"
  },
  {
    id: 2,
    title: "Mobile Protection Phase ",
    icon: HttpsOutlinedIcon,
    desc: "This is where the client is traveling by vehicle possible in a convoy",
    // path: "/"
  },
  {
    id: 3,
    title: "Static Protection Phase",
    icon: AdminPanelSettingsOutlinedIcon,
    desc: "Where the client is at the venue, residence, or temporary place of accommodation",
    // path: "/"
  },
];
export const navArr: navArrType[] = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "about",
  },
  {
    id: 3,
    title: "Pages",
    path: "#",
    subMenu: [
      {
        id: 31,
        title: "Testimonials",
        path: "/testimonials",
      },
      {
        id: 32,
        title: "Team",
        path: "/team",
      },
      {
        id: 33,
        title: "Terms and conditions",
        path: "/termsAndConditions",
      },
      {
        id: 34,
        title: "Privacy Policy",
        path: "/privacyPolicy",
      },
    ],
  },

  {
    id: 4,
    title: "Services",
    path: "/services",
  },

  {
    id: 5,
    title: "FAQ",
    path: "#",
  },

  {
    id: 6,
    title: "Blog",
    path: "/blog",
  },

  {
    id: 7,
    title: "Contact",
    path: "/contact",
  },
];

export const footerArr: footerArrType[] = [
  {
    id: 1,
    title: "About Us",
    path: "/",
  },
  {
    id: 2,
    title: "Service",
    path: "/",
  },
  {
    id: 3,
    title: "Terms & Conditions",
    path: "/",
  },
  {
    id: 4,
    title: "Privacy Policy",
    path: "/",
  },
  {
    id: 3,
    title: "FAQ",
    path: "/",
  },
];

export const WhyWeAreArr: WhyWeAreType[] = [
  {
    id: 1,
    title: "Website Security Services",
  },
  {
    id: 2,
    title: "SIEM Threat Detection",
  },
  {
    id: 3,
    title: "Content Delivery Network",
  },
  {
    id: 4,
    title: "24/7 Hours services",
  },
  {
    id: 5,
    title: "Security Management",
  },
  {
    id: 6,
    title: "Instant Malware Removal",
  },
  {
    id: 7,
    title: "Website Hack Repair",
  },
  {
    id: 8,
    title: "Security Management",
  },
];

export const ServiceiconArr = [
  {
    id: 1,
    title: "Efficient Manpower Supply.",
    icon: AdminPanelSettingsIcon,
    // path: "/"
  },
  {
    id: 2,
    title: "Trained Service Specialist.",
    icon: HomeRepairServiceIcon,
    // path: "/"
  },
  {
    id: 3,
    title: "IRealistic Site Surveys & Planning.",
    icon: PollIcon,
    // path: "/"
  },
  {
    id: 4,
    title: "Cost Effective",
    icon: CurrencyRupeeIcon,
    // path: "/"
  },
  {
    id: 5,
    title: "Top Of The Line Machine Deployment",
    icon: PrecisionManufacturingIcon,
    // path: "/"
  },
  {
    id: 6,
    title: "Best Practices & SOPs.",
    icon: WebhookIcon,
    // path: "/"
  },
  {
    id: 7,
    title: "Trainings & Evaluation Processes.",
    icon: ModelTrainingIcon,
    // path: "/"
  },
  {
    id: 8,
    title: "Most Eco‐Friendly Man & Machines.",
    icon: PeopleAltIcon,
    // path: "/"
  },
  {
    id: 9,
    title: "Customized Solution.",
    icon: TuneIcon,
    // path: "/"
  },
];

export const iconArr = [
  {
    id: 1,
    title: "FacebookIcon",
    icon: FacebookIcon,
    // path: "/"
  },
  {
    id: 2,
    title: "XIconX",
    icon: XIcon,
    // path: "/"
  },
  {
    id: 3,
    title: "InstagramIcon",
    icon: InstagramIcon,
    // path: "/"
  },
  {
    id: 4,
    title: "LinkedInIcon",
    icon: LinkedInIcon,
    // path: "/"
  },
];
