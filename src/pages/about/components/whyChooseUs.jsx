import tick from "../../../assets/images/tick.svg";

function WhyChooseUs() {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <h2 class="title text-center mb-4">Why Choose Us?</h2>
            {/* <div class="description text-center  mb-4">
            
            </div> */}

            <div class="row justify-content-center g-4 b-boxes">
              <div class="col-md-4">
                <div class="p-4 b-box bordered-dashed bg-1 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={tick} />
                    <span class="number">01</span>
                  </div>

                  <h5>Ease Of Use</h5>
                  <p>
                    Accoric is <strong>designed</strong> to be easy to use. We
                    want you to be able to use it without any training.
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 b-box bordered-dashed bg-2 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={tick} />
                    <span class="number">02</span>
                  </div>

                  <h5>Quick Onboarding</h5>
                  <p>
                    Our onboarding process is designed to be
                    <strong>quick</strong> and <strong>easy</strong>. We will
                    help you get started with your Accoric account in no time.
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 b-box bordered-dashed bg-3 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={tick} />
                    <span class="number">03</span>
                  </div>
                  <h5>Simplicity</h5>
                  <p>
                    Simple user interface designed to be
                    <strong>simple</strong>. Easily find what you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WhyChooseUs;
