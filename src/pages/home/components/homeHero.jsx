import bannerImage from '../../../assets/images/header-banner-image.png'
import arrowImage from '../../../assets/images/arrow.svg'
function HomeHero() {
  return (
    <>
      <section class="home-hero-section">
        <div class="contnr2 home-hero-container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 left-colm pe-5 first">
              <h1>
                Accurate Workforce <br/>
                Compliance <br />
                Maintained at Scale
              </h1>
              <h3>
                Accoric Management is a managed workforce compliance system,{" "}
                <br /> designed for construction organizations operating in
                complex, high-risk environments.
                <br />
                <br />
                We keep workforce certification records continuously accurate as
                workforces change, across hires, terminations, project
                mobilizations, and evolving requirements.
              </h3>

              <div class="btns-wrp">
                <a href="#"  class="btn btn-outline-primary">
                    <span>
                      Request a conversation{" "}
                      <img src={arrowImage} alt="arrow"></img>
                    </span>
                </a>
              </div>
              
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-colm">
              <div class="image-right-div">
                <div class="right-image">
                  <img src={bannerImage} class="img-no-max" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;
