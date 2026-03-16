import arrowImage from "../../../assets/images/arrow.svg";

import icon1 from "../../../assets/images/accuracy-icon1.svg";
import icon2 from "../../../assets/images/accuracy-icon2.svg";
import icon3 from "../../../assets/images/accuracy-icon3.svg";

function Accuracy() {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <h2 class="title text-center mb-4">
              Accuracy Is Maintained, Not Assumed
            </h2>
            <div class="description text-center  mb-4">
              Accoric Management is designed around the realities that cause
              compliance systems to fail:
              <br />
              workforce churn, certification expirations, fragmented ownership,
              and changing project demands.
            </div>

            <div class="row justify-content-center g-4 b-boxes">
              <div class="col-md-4">
                <div class="p-4 b-box bg-1 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={icon1} />
                    <span class="number">01</span>
                  </div>

                  <h5>Initial System Establishment</h5>
                  <p>
                    Workforce and certification data is collected, cleaned, and
                    structured within Accoric Management, creating an accurate
                    baseline that reflects your real workforce, not fragmented
                    sources.
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 b-box bg-2 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={icon2} />
                    <span class="number">02</span>
                  </div>

                  <h5>Ongoing Onboarding & Change Management</h5>
                  <p>
                    Hiring, terminations, role changes, and new training are
                    continuously reconciled so the system stays aligned with
                    field activity.
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 b-box bg-3 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={icon3} />
                    <span class="number">03</span>
                  </div>
                  <h5>Recurring Workforce Reconciliation</h5>
                  <p>
                    Active workforce rosters are regularly compared to the
                    system of record, resolving discrepancies and preventing
                    data drift over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center p60 button-bar">
            <a href="#" className="btn btn-outline-primary item">
              <span>
                Request a Demo <img src={arrowImage} alt="arrow" />
              </span>
            </a>

            <span class="empty-btn-border ms-4 item">
              +1 516-200-4720
            </span>

          </div>
        </section>
      </div>
    </>
  );
}

export default Accuracy;
