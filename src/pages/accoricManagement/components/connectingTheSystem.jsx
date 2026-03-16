import bannerImage from "../../../assets/images/workForce-compliance.png";
import arrowImage from "../../../assets/images/arrow.svg";

import icon1 from "../../../assets/images/Services/op1.svg";
import icon2 from "../../../assets/images/Services/op2.svg";
import icon3 from "../../../assets/images/Services/op3.svg";
import icon4 from "../../../assets/images/Services/op4.svg";

function ConnectingTheSystem() {
  return (
    <>
      <div class="container b-child-container black">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-6 ps-4">
                <img src={bannerImage} class="rounded-image"/>
              </div>
              <div class="col-md-6 pe-4">
                <h2 class="title mb-4">Connecting The System To The Field</h2>

                <div class="description mb-4">
                  Accoric Management is designed to maintain an accurate system
                  of record. DASHcards extend that system into the field.
                  <br />
                  <br />
                  Each worker is issued a Credential Identity DASHcard linked
                  directly to their Accoric profile. The card provides a
                  reliable, real-time reference to the certifications maintained
                  within the system of record.
                  <br />
                  <br />
                  DASHcards are not access controls or gatekeeping tools. Their
                  purpose is identity, verification, and alignment, ensuring the
                  workforce in the field matches the workforce reflected in the
                  system.
                </div>

                <a href="#" class="btn btn-outline-primary">
                  <span>
                    Schedule a Compliance Strategy Call{" "}
                    <img src={arrowImage} alt="arrow"></img>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="a-section pt-0">
          <div>
            <div class="row">
              <div class="col-md-6 pe-4">
                <h2 class="title mb-4">Operating Above Existing Systems</h2>

                <div class="description mb-4">
                  Accoric Management functions at a layer above existing
                  operational tools.
                  <br />
                  <br />
                  Accoric Management ensures the compliance data moving between
                  them remains consistent, accurate, and aligned, providing a
                  stable foundation as systems and conditions change.
                </div>

                <a href="#" class="btn btn-outline-primary">
                  <span>
                    Schedule a Compliance Strategy Call{" "}
                    <img src={arrowImage} alt="arrow"></img>
                  </span>
                </a>
              </div>
              <div class="col-md-6 ps-4">
                <div class="row">
                  <div class="col-sm-6 p-0">
                    <div class="b-box m-1 p40 text-white">
                      <img class="fixed-size" src={icon1}></img>
                      <div>Orientation Platforms</div>
                    </div>
                  </div>
                  <div class="col-sm-6 p-0">
                    <div class="b-box bg-musted m-1 p40 text-white">
                      <img class="fixed-size" src={icon2}></img>
                      <div>Training Programs</div>
                    </div>
                  </div>
                  <div class="col-sm-6 p-0">
                    <div class="b-box bg-red  m-1 p40 text-white">
                      <img class="fixed-size" src={icon3}></img>
                      <div>Site Access Systems</div>
                    </div>
                  </div>
                  <div class="col-sm-6 p-0">
                    <div class="b-box bg-purple m-1 p40 text-white">
                      <img class="fixed-size" src={icon4}></img>
                      <div>HR Workflows</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ConnectingTheSystem;
