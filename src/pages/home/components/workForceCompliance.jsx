import bannerImage from "../../../assets/images/workForce-compliance.png";
import arrowImage from "../../../assets/images/arrow.svg";

import icon1 from "../../../assets/images/Sec4-icon1.svg";
import icon2 from "../../../assets/images/Sec4-icon2.svg";
import icon3 from "../../../assets/images/Sec4-icon3.svg";

function WorkForceCompliance() {
  return (
    <>
      <div class="container b-child-container black">
        <section class="a-section">
          <div>
            <h2 class="title text-center mb-4">
              A Managed System Of Record for
              <br />
              Workforce Compliance
            </h2>

            <div class="description text-center p40 pt-0">
              Accoric Management is not a tracking tool or a point-in-time
              intake system. It is a{" "}
              <strong>centralized, authoritative system of record</strong> for
              workforce compliance, structured to remain accurate as
              organizations scale, crews move, and requirements evolve.
            </div>

            <div class="row">
              <div class="col-md-6 ps-4">
                <img class="rounded-image" src={bannerImage} />
              </div>
              <div class="col-md-6 p40">
                <div class="pb-4 text-white">
                  <b>Accoric is built for organizations that require:</b>
                </div>

                <div class="b-boxes2">
                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon1} />
                    </div>
                    <div>
                      <div class="text">Certification Classes</div>
                      <div class="desc">
                        Reliable data maintained continuously, giving
                        organizations certainty their compliance records reflect
                        reality.
                      </div>
                    </div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon2} />
                    </div>
                    <div>
                      <div class="text">Renewal Pressure</div>
                      <div class="desc">
                        Structured reports that stand up to audits, reviews, and external regulatory scrutiny.
                      </div>
                    </div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon3} />
                    </div>
                    

                    <div>
                      <div class="text">Workforce Impact</div>
                      <div class="desc">
                        Processes designed to remain accurate and verifiable even during high-pressure evaluations or investigations.
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="row b-section red-bar">
          <div class="col-md-9 title">
            Visibility Alone Is Not Enough. Accuracy Over Time Is The
            Requirement.
          </div>
          <div class="col-md-3">

             <a href="#" className="btn btn-outline-primary">
                              <span>
                                Request a Demo{" "}
                                <img src={arrowImage} alt="arrow" />
                              </span>
                            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkForceCompliance;
