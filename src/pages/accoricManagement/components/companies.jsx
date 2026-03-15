
import milconLogo from "../../../assets/images/Services/Companies/Milicon.png";
import championLogo from "../../../assets/images//Services/Companies/Champion.png";
import CACLogo from "../../../assets/images//Services/Companies/CAC.png";
import DubnerLogo from "../../../assets/images//Services/Companies/Dubner.png";
import  kedrionLogo from "../../../assets/images//Services/Companies/Kedrion.png";
import  PosillicoLogo from "../../../assets/images//Services/Companies/Posillico.png";
import HaugLandLogo from "../../../assets/images//Services/Companies/HaugLand.png";

function Companies() {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <h2 class="title mb-4 text-center">
             Join The Many Companies That Have Trusted Us To Manage Their Workforce.
            </h2>

            <div class="row">
              <div class="col-md-3">
                <div>
                    <img src={milconLogo}></img>
                    
                 
                    
                
                
                      

                 
                  </div>
              </div>
              
              <div class="col-md-3"><img src={championLogo}></img></div>
              <div className="col-md-3">   <img src={PosillicoLogo}></img>   </div>
               <div className="col-md-3"><img src={HaugLandLogo}></img></div>
                <div className="col-md-3">    <img src={kedrionLogo}></img>   </div>
                 <div className="col-md-3">      <img src={DubnerLogo}></img> </div>
                  <div className="col-md-3"><img src={CACLogo}></img>     </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Companies;
