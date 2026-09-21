import Hero from "./components/hero";
import WorkforceCompliance from "./components/workforceCompliance";
import ManagementFunctions from "./components/managementFunctions";
import Companies from "./components/companies";
import OverTime from "./components/overTime";
import FailQuietly from "./components/failQuietly";
import CallBanner from "./components/callBanner";
import Accuracy from "./components/accuracy";
import ConnectingTheSystem from "./components/connectingTheSystem";
import ReportingBuiltForOversight from "./components/reportingBuiltForOversight";
import Testimonials from "./components/testimonials";
import { useOutletContext } from "react-router-dom";
function Home() {
     const { openPopup } = useOutletContext();
  return (
    <>
      <Hero></Hero>
      <WorkforceCompliance openPopup={openPopup}></WorkforceCompliance>
      <ManagementFunctions openPopup={openPopup}></ManagementFunctions>
      <Companies></Companies>
      <OverTime openPopup={openPopup}></OverTime>
      <FailQuietly></FailQuietly>
      <CallBanner openPopup={openPopup}></CallBanner>
      <Accuracy></Accuracy>
      <ConnectingTheSystem openPopup={openPopup}></ConnectingTheSystem>
      <ReportingBuiltForOversight openPopup={openPopup}></ReportingBuiltForOversight>
      <Testimonials></Testimonials>
      
    </>
  );
}

export default Home;
