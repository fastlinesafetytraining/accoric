
import bannerImage from "../../../assets/images/sec4-img1.webp";
import icon1 from "../../../assets/images/Sec4-icon1.svg";
import icon2 from "../../../assets/images/Sec4-icon2.svg";
import icon3 from "../../../assets/images/Sec4-icon3.svg";
import icon4 from "../../../assets/images/Sec4-icon4.svg";

function Oversight() {
  return (
    <>
      <div class="container b-child-container white">
        <section class="a-section">
          <div>
            <h2 class="title mb-4">
              Reporting Designed For Oversight,<br />
              Not Guesswork
            </h2>

            <div class="row">
              <div class="col-md-6 pe-4">
                <div class="description mb-4">
                  Accoric Management provides structured reporting that converts
                  certification data into actionable oversight.
                  <br />
                  <br />
                  Rather than listing certificates, reporting is organized
                  around:
                </div>

                <div class="b-boxes2">
                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon1}/>
                    </div>
                    <div class="text">Certification Classes</div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon2} />
                    </div>
                    <div class="text">Renewal Pressure</div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon3}/>
                    </div>
                    <div class="text">Workforce Impact</div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon4} />
                    </div>
                    <div class="text">Areas Of Emerging Exposure</div>
                  </div>
                </div>

                <div class="description">
                  This allows teams to identify risk early, before it becomes operational or audit-driven, and gives leadership confidence in the integrity of the record.
                </div>

              </div>

              <div class="col-md-6 ps-4">
                <img
                  src={bannerImage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Oversight;
