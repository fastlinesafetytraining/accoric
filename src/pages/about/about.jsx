import PageHeader from "../../views/pageHeader"

import image1 from "../../assets/images/about/accoric-about-us-bio.webp";
import TrustedWhere from "./components/trustedWhere";
import WhyChooseUs from "./components/whyChooseUs";


function About() {
  return (
    <>
    <PageHeader title="About Us" description="Simplifying certification tracking while ensuring
maximum security and efficiency" ></PageHeader>

      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-8 pe-4">
                <h2 class="title mb-4">
                  Who we are?
                </h2>
              
              <p class="mt-3">
                At <strong>Accoric</strong>, we have developed a solution
                specifically for companies with a large workforce. Our goal is
                to provide a straightforward way to keep track of your fleet'
                certifications, helping you avoid unexpected expirations.
              </p>

              <p>
                We are <strong>committed</strong> to revolutionizing how
                companies manage their certifications and compliance
                requirements. Our focus is on simplifying certification tracking
                while ensuring maximum security and efficiency.
              </p>

              <p class="mb-0">
                Our team of <strong>experienced professionals</strong> is ready
                to assist you in managing your certifications and compliance
                effectively.
              </p>

               
              </div>
              <div class="col-md-4 image-container">
                <img class="rounded-image" src={image1} />
              </div>
              
            </div>
          </div>
        </section>
      </div>

      <div class="container b-child-container black">
        <section class="a-section">
          <div>
            <div class="row">
              <div class="col-md-8 pe-4">
                <h2 class="title mb-4">
                  Our Promise
                </h2>
              
              <p class="description">
                Our promise is to provide you with the
                <strong> best possible service and support</strong>. We will
                help you get started with your Accoric Management account in no
                time.
              </p>

              <p class="description">
                We will also provide you with a dashboard to view your
                certifications and compliance requirements.
              </p>
               
              </div>
              <div class="col-md-4 image-container">
                <img class="rounded-image" src={image1} />
              </div>
              
            </div>
          </div>
        </section>
      </div>
    
    <WhyChooseUs></WhyChooseUs>
     
     
<TrustedWhere></TrustedWhere>
     
      <section class="about-whychooseus-section container my-5">
        <div class="card border-0 shadow-lg rounded-5 p-5 text-center">
          {/* <!-- Title --> */}
          <h1 class="fw-bold display-4 mb-2">Get In Touch</h1>
          <p class="mb-5 fs-5">
            Open to all questions and inquiries. We are available to help you
            with your needs{" "}
          </p>

          <div class="row g-5">
            {/* <!-- Option 1 --> */}
            <div class="col-lg-4 col-md-6">
              {/* <div class="d-flex justify-content-center mb-4">
                <div
                  class="border border-3 border-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src="~/siteImages/icon-touch.svg"
                    class="img-fluid"
                    style={{ width: "50px;" }}
                  ></img>
                </div>
              </div> */}

              <h4 class="fw-semibold mb-3">Email Us</h4>

              <hr class="mb-3" />
              <p class="text-muted">
                Technical Help (Accoric Management): techsupport@accoric.com
              </p>
              <p>Technical Help (Accoric DashCard): dash@accoric.com</p>
              <p>Sales/General Inquiry: info@accoric.com</p>
            </div>

            {/* <!-- Option 2 --> */}
            <div class="col-lg-4 col-md-6">
              {/* <div class="d-flex justify-content-center mb-4">
                <div
                  class="border border-3 border-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src="~/siteImages/icon-lightning.svg"
                    class="img-fluid"
                    style={{ width: "50px" }}
                  ></img>
                </div>
              </div> */}

              <h4 class="fw-semibold mb-3">Call Us</h4>
              <hr class="mb-3" />

              <p class="text-muted">
                Technical Help (Accoric Management): (631) 200-4720
              </p>
              <p>Technical Help (Accoric Management): (631) 200-1051</p>
              <p>Sales/General Inquiry: (516) 200-4720</p>
            </div>

            {/* <!-- Option 3 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="d-flex justify-content-center mb-4">
                {/* <div
                  class="border border-3 border-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src="~/siteImages/icon-check.svg"
                    class="img-fluid"
                    style={{ width: "50px" }}
                  ></img>
                </div> */}
              </div>

              <h4 class="fw-semibold mb-3 border-bottom-1">
                Hours of Operations
              </h4>

              <hr class="mb-3" />

              <p class="text-muted">Monday-Friday: 9:00AM - 5:00PM EDT</p>
              <p>Saturday-Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
