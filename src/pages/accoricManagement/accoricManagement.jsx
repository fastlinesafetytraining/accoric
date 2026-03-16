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
function Home() {
  return (
    <>
      <Hero></Hero>
      <WorkforceCompliance></WorkforceCompliance>
      <ManagementFunctions></ManagementFunctions>
      <Companies></Companies>
      <OverTime></OverTime>
      <FailQuietly></FailQuietly>
      <CallBanner></CallBanner>
      <Accuracy></Accuracy>
      <ConnectingTheSystem></ConnectingTheSystem>
      <ReportingBuiltForOversight></ReportingBuiltForOversight>
    </>
  );
}

export default Home;
