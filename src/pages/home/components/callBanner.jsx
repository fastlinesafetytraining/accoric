import arrowImage from "../../../assets/images/arrow.svg";

function CallBanner({openPopup}) {
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
          
              <button type="button" className="btn btn-primary m-1"
              onClick={openPopup}
              >
                <span>
                  Get Started {"  "}
                  {/* <img src={arrowImage} alt="arrow"></img> */}
                </span>
              </button>


              <button type="button"  className="btn btn-outline-primary m-1"
               onClick={openPopup}
              >
                <span>
                  Book a Call
                  <img src={arrowImage} alt="arrow"></img>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallBanner;
