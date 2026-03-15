import bannerImage from "../../../assets/images/Sec5-img1.png";
import arrowImage from "../../../assets/images/arrow.svg";
import tick from "../../../assets/images/tick-icon.svg";

function Regulated() {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-6 ps-4">
                <img class="rounded-image" src={bannerImage} />
              </div>
              <div class="col-md-6 pe-4 pt-4">
                <h2 class="title mb-4">
                  Built For Complex, Regulated Operations
                </h2>
                <div class="description mb-4">
                  Accoric Management is designed for organizations that:
                </div>

                <div>
                  <div class="pb-2"><span class="circle-icon me-2"><img src={tick}></img></span> Operate in high-risk construction environments</div>
                  <div class="pb-2"><span class="circle-icon me-2"><img src={tick}></img></span> Manage large or frequently changing workforces</div>
                  <div class="pb-2"><span class="circle-icon me-2"><img src={tick}></img></span> Require confidence in compliance accuracy</div>
                  <div class="pb-2"><span class="circle-icon me-2"><img src={tick}></img></span> Need systems that hold up under scrutiny</div>
                </div>

                <div class="pt-4 pb-4">If accuracy matters, Accoric fits.</div>

                <div>
                  <a href="#" class="btn btn-outline-primary">
                    <span>
                      Schedule a Compliance Strategy Call{" "}
                      <img src={arrowImage} alt="arrowImage" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Regulated;
