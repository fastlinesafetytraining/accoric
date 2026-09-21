import arrowImage from "../../../assets/images/arrow.svg";
import bannerImage from "../../../assets/images/Services/img1.png";

function  WorkforceCompliance({openPopup}) {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-6 pe-4">
                <h2 class="title mb-4">
                  A Managed System Of Record For Workforce Compliance
                </h2>
                <p>
                  Accoric Management maintains an accurate, centralized record of workforce compliance as conditions change over time. 
                </p>
                <p>
                  It is built for construction organizations where workforces are dynamic, people are hired, reassigned, and leave; certifications expire; and requirements evolve across projects and sites.
                </p>
                <p>
                 Accoric Management functions as the authoritative source of truth for workforce compliance, ensuring records remain current, consistent, and defensible as reality shifts.
                </p>

                <button type="button" class="btn btn-outline-primary"
                onClick={openPopup}
                >
                  <span>
                    Schedule a Compliance Strategy Call{" "}
                    <img src={arrowImage} alt="arrow"></img>
                  </span>
                </button>
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

export default WorkforceCompliance;
