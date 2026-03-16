import milconLogo from "../../../assets/images/Services/Companies/Milicon.png";
import championLogo from "../../../assets/images/Services/Companies/Champion.png";
import CACLogo from "../../../assets/images/Services/Companies/CAC.png";
import DubnerLogo from "../../../assets/images/Services/Companies/Dubner.png";
import kedrionLogo from "../../../assets/images/Services/Companies/Kedrion.png";
import PosillicoLogo from "../../../assets/images/Services/Companies/Posillico.png";
import HaugLandLogo from "../../../assets/images/Services/Companies/HaugLand.png";

function Companies() {
  return (
    <>
      <div className="container b-child-container">
        <section className="a-section">
          <div>
            <h2 className="title mb-4 text-center">
              Join The Many Companies That Have Trusted Us To Manage Their Workforce.
            </h2>

            <div className="companies">
              <div className="row flex-nowrap companies-track">

                {/* First Set */}
                <div className="col-auto"><img src={milconLogo} /></div>
                <div className="col-auto"><img src={championLogo} /></div>
                <div className="col-auto"><img src={PosillicoLogo} /></div>
                <div className="col-auto"><img src={HaugLandLogo} /></div>
                <div className="col-auto"><img src={kedrionLogo} /></div>
                <div className="col-auto"><img src={DubnerLogo} /></div>
                <div className="col-auto"><img src={CACLogo} /></div>

                {/* Duplicate Set for infinite scroll */}
                <div className="col-auto"><img src={milconLogo} /></div>
                <div className="col-auto"><img src={championLogo} /></div>
                <div className="col-auto"><img src={PosillicoLogo} /></div>
                <div className="col-auto"><img src={HaugLandLogo} /></div>
                <div className="col-auto"><img src={kedrionLogo} /></div>
                <div className="col-auto"><img src={DubnerLogo} /></div>
                <div className="col-auto"><img src={CACLogo} /></div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default Companies;