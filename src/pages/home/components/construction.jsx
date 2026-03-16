import bannerImage from "../../../assets/images/s1-img1.png";
import arrowImage from "../../../assets/images/arrow.svg";
import icon1 from "../../../assets/images/Records-drift-icon.svg";
import icon2 from "../../../assets/images/expiration-go-unnotices-icon.svg";
import icon3 from "../../../assets/images/workforce-rosters-icon.svg";
import icon4 from "../../../assets/images/issues-surface-icon.svg";

function Construction() {
  return (
    
      <section className="container b-child-container">
        <div className="a-section">

          <div className="row">
            <div className="col-md-8">
              <h2 className="title mb-4 construction-title">
                Construction Workforces Are Dynamic By Nature.
              </h2>
            </div>
          </div>

          <div className="row">

            
            <div className="col-md-6 pe-4">

              <div className="subtitle mb-4">
                Compliance Breaks When Workforces Don't Stand Still.
              </div>

              <div className="description mb-4">
                People are hired and terminated. Crews rotate across
                projects. Certifications expire. Requirements change.
                Oversight shifts between departments and sites. Most
                compliance systems are designed to capture information at a
                moment in time, during onboarding, orientation, or upload.
                Very few are designed to remain accurate as reality changes.
              </div>

              <p className="sec2-bold-note">
                That gap is where exposure accumulates:
              </p>

              <div className="sec2-cards">
                <div className="sec2-card">
                  <div className="sec2-card-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <div>
                    <div className="sec2-card-title">Records drift quietly</div>
                    <div className="sec2-card-desc">
                      As workforce changes occur daily, records aren't
                      updated, gradually losing alignment with reality.
                    </div>
                  </div>
                </div>

                <div className="sec2-card">
                  <div className="sec2-card-icon blue">
                    <img src={icon2} alt="" />
                  </div>
                  <div>
                    <div className="sec2-card-title">Expirations go unnoticed</div>
                    <div className="sec2-card-desc">
                      Certification deadlines pass without visibility,
                      leaving organizations exposed to preventable
                      compliance risks.
                    </div>
                  </div>
                </div>

                <div className="sec2-card">
                  <div className="sec2-card-icon blue">
                    <img src={icon3} alt="" />
                  </div>
                  <div>
                    <div className="sec2-card-title">Workforce rosters fall out of sync</div>
                    <div className="sec2-card-desc">
                      Hiring, terminations, and reassignments outpace
                      updates, causing inconsistencies in workforce records.
                    </div>
                  </div>
                </div>

                <div className="sec2-card">
                  <div className="sec2-card-icon blue">
                    <img src={icon4} alt="" />
                  </div>
                  <div>
                    <div className="sec2-card-title">Issues surface under audit pressure</div>
                    <div className="sec2-card-desc">
                      These gaps often remain hidden until audits,
                      mobilizations, or contractor requests demand
                      verification.
                    </div>
                  </div>
                </div>
              </div>

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

            {/* RIGHT COLUMN — your original ps-4 kept */}
            <div className="col-md-6 ps-4 construction-right">

              <div className="construction-quote-card">
                <div className="construction-quote-marks">"</div>
                <p>
                  Accoric Management has empowered Related Services LLC to
                  proactively manage employee credentials and certification
                  status, a significant improvement. We highly recommend it.
                </p>
                <div className="construction-quote-footer">
                  <div className="construction-quote-avatar"></div>
                  <span className="construction-quote-name">Justin A.</span>
                  <div className="construction-quote-stars">★★★★★</div>
                </div>
              </div>

              <img
                className="rounded-image construction-main-img"
                src={bannerImage}
                alt="Construction workforce compliance"
              />

            </div>

          </div>
        </div>
      </section>
    
  );
}

export default Construction;