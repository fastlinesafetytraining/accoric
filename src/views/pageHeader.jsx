function PageHeader({title, description}) {
  return (
    <>
      <section class="home-hero-section">
        <div class="contnr2 home-hero-container">
          <div class="row">
            <div class="col-12 left-colm pe-5">
              
              <h1 class="text-center">
               {title}
              </h1>
              <h3 class="text-center">
               {description}
              </h3>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}

export default PageHeader;
