import React from "react";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
export default function ContactUs() {
  return (
    <section className="w-full h-80  flex">
      <div className="w-[40%] h-full main-container py-7 bg-[#191919]   text-white flex flex-col justify-center  ">
        <div className="bg-red-500 center rounded-full w-16 h-16">
<EditLocationAltIcon/>
        </div>
        <h1 className="text-3xl py-4">New Delhi</h1>
        <p>25 SHEHZADA BAGH EXTN DAYA BASTI ,NEW DELHI DL 110035 IN</p>
        <p>Email: info@zplussecurity.net</p>
      </div>

      <div className="w-full h-full bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7001.2922289410935!2d77.169127!3d28.670313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d025c351bd409%3A0xe97a672f01faff55!2sPhase%201%2C%20Shivaji%20Nagar%2C%20Daya%20Basti%2C%20Delhi%2C%20110035!5e0!3m2!1sen!2sin!4v1717071115728!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
