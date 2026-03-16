import arrowImage from "../../../assets/images/arrow.svg";
import bannerImage from "../../../assets/images/Services/img6.png";
import tickImage from "../../../assets/images/tick.svg"; 

function  ReportingBuiltForOversight() {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-6 pe-4">
                <h2 class="title mb-4">
                 Reporting Built For Oversight And Accountability
                </h2>
                <p>
                 Accoric Management provides structured reporting that translates compliance data into operational insight.
                </p>
                <p>
                  <strong>Reporting is designed to support:</strong>
                </p>
                  <div class="mb-2">
                    ● Proactive Renewal Planning
                  </div>
                  <div class="mb-2">
                    ● Workforce Readiness Reviews
                  </div>
                  <div class="mb-2">
                    ● Audit And GC Documentation Requests 
                  </div>
                  <div class="mb-2">
                    ● Leadership-Level Oversight
                  </div>

                <p>
                  <strong> Rather than static lists, reporting highlights:</strong>
                </p>
                
                <div class="mb-2">
                        <img src={tickImage} alt="tick"></img>   Renewal Pressure By Class
                  </div>
                  <div class="mb-2">
                         <img src={tickImage} alt="tick"></img>  Workforce Impact By Employee Count
                  </div>
                  <div class="mb-2">
                         <img src={tickImage} alt="tick"></img> Areas Where Records Are Drifting Or Incomplete 
                  </div>
                  
              
                <p>
                 This allows teams to act early, not react under pressure.
                </p>

              
           <div className="sec2-cta-row">
                    <a href="#" className="btn btn-outline-primary">
                      <span>
                        Stabilize Your Compliance System{" "}
                        <img src={arrowImage} alt="arrow" />
                      </span>
                    </a>
                    <div className="sec2-phone">
                      <i className="bi bi-telephone-fill"></i> <strong>+1 516-200-4720</strong>
                    </div>
                  </div>
              </div>
              <div class="col-md-6 image-container">
                <img class="rounded-image" src={bannerImage} />
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ReportingBuiltForOversight;
