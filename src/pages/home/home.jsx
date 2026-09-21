import HomeHero from "./components/homeHero";
import Construction from "./components/construction";
import WorkForceCompliance from "./components/workForceCompliance";
import Accuracy from "./components/accuracy";
import Oversight from "./components/oversight";
import CallBanner from "./components/callBanner";
import Regulated from "./components/regulated";
import TrustedWhere from "./components/trustedWhere";
import Testimonials from "../accoricManagement/components/testimonials";

import { useOutletContext } from "react-router-dom";

function Home() {

   const { openPopup } = useOutletContext();

  return (
    <>
      <HomeHero openPopup={openPopup} ></HomeHero>

      <Construction openPopup={openPopup}></Construction>

      <WorkForceCompliance openPopup={openPopup}></WorkForceCompliance>

      <Accuracy openPopup={openPopup}></Accuracy>

      <Oversight></Oversight>

      <CallBanner openPopup={openPopup}></CallBanner>

      <Regulated openPopup={openPopup}></Regulated>

      <Testimonials></Testimonials>

      <TrustedWhere></TrustedWhere>
    </>
  );
}

export default Home;
