import HomeHero from "./components/homeHero";
import Construction from "./components/construction";
import WorkForceCompliance from "./components/workForceCompliance";
import Accuracy from "./components/accuracy";
import Oversight from "./components/oversight";
import CallBanner from "./components/callBanner";
import Regulated from "./components/regulated";
import TrustedWhere from "./components/trustedWhere";


function Home() {
  return (
    <>
      <HomeHero></HomeHero>

      <Construction></Construction>

      <WorkForceCompliance></WorkForceCompliance>

      <Accuracy></Accuracy>

      <Oversight></Oversight>

      <CallBanner></CallBanner>

      <Regulated></Regulated>

      <TrustedWhere></TrustedWhere>
    </>
  );
}

export default Home;
