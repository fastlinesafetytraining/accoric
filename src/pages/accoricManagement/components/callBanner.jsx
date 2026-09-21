import arrowImage from "../../../assets/images/arrow.svg";

function CallBanner({openPopup}) {
  return (
    <>
      <div class="container black">
        <div class="row black-bar">
          <div class="col-md-8 title">
            Accurate Workforce Compliance Maintained at Scale
          </div>
          <div class="col-md-4">
            <div class="pull-right">
              
              <button type="button" class="btn btn-outline-primary m-1"
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
