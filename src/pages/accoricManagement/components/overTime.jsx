import bannerImage from "../../../assets/images/Services/img3.png";
import arrowImage from "../../../assets/images/arrow.svg";
import icon1 from "../../../assets/images/Services/b1.svg";
import icon2 from "../../../assets/images/Services/b2.svg";
import icon3 from "../../../assets/images/Services/b3.svg";

function OverTime() {
  return (
    <div class="container b-child-container black">
      <section class="a-section">
        <div className="row align-items-center">


          <div class="col-md-6 pe-5">
            <h2 class="title mb-3">
              Built To Maintain<br />Accuracy Over Time
            </h2>

            <div class="description mb-4">
              Accoric Management is structured around three principles:
            </div>

            <div class="overtime-img-wrap mb-4">
              <img
                src={bannerImage}
                alt="Workforce compliance dashboard"
                className="rounded-image w-100"
              />
            </div>

            <div class="description mb-4">
              The result is a compliance record that holds up operationally
              and under scrutiny.
            </div>

            <a href="#" className="btn btn-outline-primary">
              Request a Demo
              <img src={arrowImage} alt="arrow" />
            </a>
          </div>

         
          <div class="col-md-6 ps-4">
            <div class="overtime-steps">

              <div class="overtime-step">
                <div class="overtime-step-left">
                  <div class="overtime-step-number">01</div>
                  <div class="overtime-step-line"></div>
                </div>
                <div class="b-box2 w-100">
                <div class="overtime-card-header">
                  <div class="icon"><img src={icon1} alt="" /></div>
                  <div class="text">Centralization</div>
                </div>
                <div class="overtime-card-desc">
                  Workforce certification data is organized into a single,
                  authoritative record.
                </div>
              </div>
              </div>

              <div class="overtime-step">
                <div class="overtime-step-left">
                  <div class="overtime-step-number">02</div>
                  <div class="overtime-step-line"></div>
                </div>
               
              <div class="b-box2 w-100">
                <div class="overtime-card-header">
                  <div class="icon"><img src={icon2} alt="" /></div>
                  <div class="text">Ongoing Accuracy</div>
                </div>
                <div class="overtime-card-desc">
                  Records are maintained by the Accoric team as people
                  and requirements change, preventing drift over time.
                </div>
              </div>
              </div>

              <div class="overtime-step">
                <div class="overtime-step-left">
                  <div class="overtime-step-number">03</div>
                </div>
                
              <div class="b-box2 w-100">
                <div class="overtime-card-header">
                  <div class="icon"><img src={icon3} alt="" /></div>
                  <div class="text">Reconciliation</div>
                </div>
                <div class="overtime-card-desc">
                  The system is continuously aligned back to the active
                  workforce to ensure it reflects reality, not assumptions.
                </div>
              </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default OverTime;