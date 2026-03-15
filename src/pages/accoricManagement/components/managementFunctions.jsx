import bannerImage from "../../../assets/images/Services/img2.png";
import arrowImage from "../../../assets/images/arrow.svg";

function  ManagementFunctions () {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-6 image-container">
                <img class="rounded-image" src={bannerImage} />
              </div>
              <div class="col-md-6 pe-4">
                <h2 class="title mb-4">
                  How Accoric Management Functions
                </h2>
                <p>
                  Accoric Management operates as a system of record, not a point-in-time intake tool.
                </p>
                <p>
                  It centralizes workforce certification data, maintains accuracy through ongoing reconciliation, and provides structured visibility into renewal pressure and exposure as workforces evolve.
                </p>
                <p>
                  The system is designed to remain correct, not just complete, as organizations grow and complexity increases.
                </p>

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
      </div>
    </>
  );
}

export default ManagementFunctions;
