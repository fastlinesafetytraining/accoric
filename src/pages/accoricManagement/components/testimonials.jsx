import { useEffect } from "react";
import Champion from '../../../assets/images/Services/Companies/Champion.png';
import Dubner from '../../../assets/images/Services/Companies/Dubner.png';
import Image from '../../../assets/images/Services/blue-quotaion-icon.svg';


function Testimonials() {

  useEffect(() => {
    if (window.$) {
      $("#testi-slider").owlCarousel({
        items: 2,   
        loop: true,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 3000,
        nav: true,
        dots: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 }
        }
      });
    }
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="testi-heading">Testimonials</h2>
          <div className="phone-pill">+1 516-200-4720</div>
        </div>

        {/* Slider */}
        <div id="testi-slider" className="owl-carousel owl-theme">

          {/* CARD 1 */}
          <div className="item">
            <div className="testi-card">
              <div className="quote d-inline-block"> <img  width="26px" height="42px" src={Image}></img>
              </div>

              <p className="testi-text">
                Accoric Management's capabilities have enabled Champion Painting's management team to bid and pre-plan projects more efficiently with easy access to all employee training credentials.
              </p>
              <hr/>

              <div className="testi-footer">
                <div className="d-flex align-items-center gap-2">

                  {/* IMAGE PLACEHOLDER */}
                  <div className="logo-box">
                    <img src={Champion}></img>
                  </div>

                  <span className="name">Amel H.</span>
                </div>

                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="item">
            <div className="testi-card">
              <div className="quote d-inline-block"><img  width="26px" height="42px" src={Image}></img></div>

              <p className="testi-text">
                Accoric Management has made it much easier for our team to track employee certifications and safety training in one place. With quick access to all credentials, we can prepare bids faster and plan projects with greater confidence and efficiency.
              </p>
              <hr/>
              <div className="testi-footer">
                <div className="d-flex align-items-center gap-2">

                  {/* IMAGE PLACEHOLDER */}
                  <div className="logo-box">
                     <img src={Dubner}></img>
                  </div>
 
                  <span className="name">Nick D.</span>
                </div>
                    
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;