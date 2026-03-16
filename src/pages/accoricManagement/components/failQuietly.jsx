

import bannerImage from "../../../assets/images/Services/img4.png";
import icon1 from "../../../assets/images/Services/m1.svg";
import icon2 from "../../../assets/images/Services/m2.png";
import icon3 from "../../../assets/images/Services/m3.svg";
import icon4 from "../../../assets/images/Services/m4.svg";

function FailQuietly() {
  return (
    <>
      <div class="container b-child-container white">
        <section class="a-section">
          <div>
            <h2 class="title mb-4">
              Most Workforce Compliance Systems Fail Quietly
            </h2>

            <div class="row">
              <div class="col-md-6 pe-4">
                <div class="description mb-4">
                  They start accurate, then gradually fall out of sync as:
                  <br />
                  <br/>
                </div>

                <div class="b-boxes2">
                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon1}/>
                    </div>
                    <div class="text">Workers are hired, terminated, or reassigned</div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon2} />
                    </div>
                    <div class="text">Certifications expire or change</div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon3}/>
                    </div>
                    <div class="text">Requirements evolve by project or GC</div>
                  </div>

                  <div class="b-box2">
                    <div class="icon">
                      <img src={icon4} />
                    </div>
                    <div class="text">Responsibility for updates becomes fragmented</div>
                  </div>
                </div>
                <p>Over time, the system no longer reflects reality, even though data still exists. Accoric Management is designed specifically to prevent that drift.</p>
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

export default FailQuietly;
