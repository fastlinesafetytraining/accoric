import arrowImage from "../../../assets/images/arrow.svg";

function CallBanner() {
  return (
    <>
      <div class="container black">
        <div class="row black-bar">
          <div class="col-md-8 title">
            Visibility Alone Is Not Enough. Accuracy Over Time Is The
            Requirement.
          </div>
          <div class="col-md-4">
            <div class="pull-right">
              <a href="#" class="btn btn-primary m-1">
                <span>
                  Get Started {"  "}
                  {/* <img src={arrowImage} alt="arrow"></img> */}
                </span>
              </a>
              <a href="#" class="btn btn-outline-primary m-1">
                <span>
                  Book a Call
                  <img src={arrowImage} alt="arrow"></img>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallBanner;
