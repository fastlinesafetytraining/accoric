// Custom Scripts 

/*======== jumper =========*/
$(".jumper").on("click", function( e ) {    
  e.preventDefault();

  $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
  }, 1000);
});

$(window).scroll(function() {
	
  /*---- jumper -----*/
  if ($(this).scrollTop() > 200){  
      $('.jumper').addClass("showup");
  }
  else{
      $('.jumper').removeClass("showup");
  }

  /*------ services banner parallax effect -----*/

  let scrollTop = $(this).scrollTop();
  let offset = scrollTop * 0.2; // control speed

  $(".image-ban-section").css(
    "background-position",
    "center " + -offset + "px"
  );
});

/*========= sticky menu ========*/

  $(function () {
    const $mainHeader = $(".main-header");
    let lastScrollY = $(window).scrollTop();
    const threshold = 15;

    $(window).on("scroll", function () {
      const currentScroll = $(this).scrollTop();
      const scrollDiff = Math.abs(currentScroll - lastScrollY);

      // Ignore tiny scrolls
      if (scrollDiff < threshold) return;

      // At top → show full navbar
      if (currentScroll <= threshold) {
        $mainHeader.removeClass("full-sticky half-sticky");
        lastScrollY = currentScroll;
        return;
      }

      // Scrolling down → hide full navbar
      if (currentScroll > lastScrollY) {
        $mainHeader
          .addClass("full-sticky")
          .removeClass("half-sticky");
      }
      // Scrolling up → show half navbar + shadow
      else {
        $mainHeader
          .removeClass("full-sticky")
          .addClass("half-sticky");
      }

      lastScrollY = currentScroll;
    });
  });

/*========= Counter ==========*/

$(window).scroll(function() {
    $('.counter-value').each(function() {
      var contentTop = $(this).offset().top - window.innerHeight;
      if ($(window).scrollTop() > contentTop) {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate(
          {
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          }
        );
      }
    });
  });

/*=========== testimonials-slider ==========*/
  
var owl = $('#testi-slider');
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: false,
  autoplaySpeed: 850,
  navSpeed: 850,
  dots: false,
  nav: true,
  navText: [
    "<img src='/images/arr-prev.svg' alt='Previous'>", // HTML for the previous button
    "<img src='/images/next-arrw.png' alt='Next'>"     // HTML for the next button
  ],
   responsive:{
      0:{
        items: 1
      },
      768:{
        items: 2 
      },
      993:{
        items: 3
      },
      1280:{
        items: 4
      }
    }
});

/*=========== Case Study-slider ==========*/
  
var owl2 = $('#casestudy-slider');
owl2.owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: false,
  autoplaySpeed: 850,
  navSpeed: 850,
  dots: false,
  nav: false,
   responsive:{
      0:{
        items: 1
      },
      768:{
        items: 2 
      },
      993:{
        items: 3
      },
      1280:{
        items: 3
      },
      1920:{
        items: 3
      }
    }
});

/*========= scroll slide-up animation ==========*/

const scrollElements = document.querySelectorAll(".js-scroll");

// Define the function that runs when an element intersects the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("come-in");
            observer.unobserve(entry.target); 
        } 
    });
});

// Observe each element
scrollElements.forEach(element => {
    observer.observe(element);
});


/*=========== video playback ===========*/ 

$(function () {
  const video = $('#bgVideo')[0];
  const btn = $('#videoToggle');

  function playVideo() {
    video.play();
    btn.text('⏸').addClass('hidden');
  }

  function pauseVideo() {
    video.pause();
    btn.text('▶').removeClass('hidden');
  }

  // Button click
  btn.on('click', function (e) {
    e.stopPropagation(); // prevent double trigger
    video.paused ? playVideo() : pauseVideo();
  });

  // Tap/click anywhere on video (mobile friendly)
  $('#bgVideo').on('click touchstart', function () {
    video.paused ? playVideo() : pauseVideo();
  });

  // Safety: show button if video pauses for any reason
  // video.addEventListener('pause', () => {
  //   btn.removeClass('hidden').text('▶');
  // });
});


////////////////// GSAP vertical stacking Cards ///////////////////

// Only enabled for Desktop devices
if(jQuery(window).width() >= 1199){

  gsap.registerPlugin(ScrollTrigger);

  const cardsWrappers = gsap.utils.toArray(".zz-card-wrap");
  const cards = gsap.utils.toArray(".zz-card");

  cardsWrappers.forEach((wrapper, i) => {
    const card = cards[i];
    let scale = 1,
      rotation = 0;
    if (i !== cards.length - 1) {
      scale = 0.9 + 0.025 * i;
      rotation = -10;
    }
    gsap.to(card, {
      scale: scale,
      rotationX: rotation,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top " + (10 + 20 * i),
        end: "bottom 950",
        endTrigger: ".zz-card-wrapper",
        scrub: true,
        pin: wrapper,
        pinSpacing: false,
        id: i + 1
      }
    });
  });

}

// =================== Custom Select Starts =====================
document.addEventListener('DOMContentLoaded', createSelect, false);
    function createSelect() {
    //var select = document.getElementsByTagName('select'),
    var select = document.getElementsByClassName('custom-drpdwn'),
        liElement,
        ulElement,
        optionValue,
        iElement,
        optionText,
        selectDropdown,
        elementParentSpan;

        for (var select_i = 0, len = select.length; select_i < len; select_i++) {
        //console.log('selects init');

        //select[select_i].style.display = 'none';
        wrapElement(document.getElementById(select[select_i].id), document.createElement('div'), select_i, select[select_i].getAttribute('placeholder-text'));

        for (var i = 0; i < select[select_i].options.length; i++) {
        liElement = document.createElement("li");
        optionValue = select[select_i].options[i].value;
        optionText = document.createTextNode(select[select_i].options[i].text);
        liElement.className = 'select-drpdwn-listitem';
        liElement.setAttribute('data-value', optionValue);
        liElement.appendChild(optionText);
        ulElement.appendChild(liElement);

        liElement.addEventListener('click', function () {
            displyUl(this);
        }, false);
        }
    }
    function wrapElement(el, wrapper, i, placeholder) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);

        document.addEventListener('click', function (e) {
        let clickInside = wrapper.contains(e.target);
        if (!clickInside) {
            let menu = wrapper.getElementsByClassName('select-dropdown__list');
            menu[0].classList.remove('active');
        }
        });

        var buttonElement = document.createElement("button"),
        spanElement = document.createElement("span"),
        spanText = document.createTextNode(placeholder);
        iElement = document.createElement("span");
        ulElement = document.createElement("ul");

        wrapper.className = 'select-dropdown select-dropdown--' + i;
        buttonElement.className = 'select-dropdown__button select-dropdown__button--' + i;
        buttonElement.setAttribute('data-value', '');
        buttonElement.setAttribute('type', 'button');
        spanElement.className = 'select-dropdown select-dropdown--' + i;
        iElement.className = 'drpdwn-notch';
        ulElement.className = 'select-dropdown__list select-dropdown__list--' + i;
        ulElement.id = 'select-dropdown__list-' + i;

        wrapper.appendChild(buttonElement);
        spanElement.appendChild(spanText);
        buttonElement.appendChild(spanElement);
        buttonElement.appendChild(iElement);
        wrapper.appendChild(ulElement);
    }

    function displyUl(element) {

        if (element.tagName == 'BUTTON') {
        selectDropdown = element.parentNode.getElementsByTagName('ul');
        //var labelWrapper = document.getElementsByClassName('js-label-wrapper');
        for (var i = 0, len = selectDropdown.length; i < len; i++) {
            selectDropdown[i].classList.toggle("active");
            //var parentNode = $(selectDropdown[i]).closest('.js-label-wrapper');
            //parentNode[0].classList.toggle("active");
        }
        } else if (element.tagName == 'LI') {
        var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
        selectElement(selectId.id, element.getAttribute('data-value'));
        elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
        element.parentNode.classList.toggle("active");
        elementParentSpan[0].textContent = element.textContent;
        elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
        }

    }
    function selectElement(id, valueToSelect) {
        var element = document.getElementById(id);
        element.value = valueToSelect;
        element.setAttribute('selected', 'selected');
    }
    var buttonSelect = document.getElementsByClassName('select-dropdown__button');
    for (var i = 0, len = buttonSelect.length; i < len; i++) {
        buttonSelect[i].addEventListener('click', function (e) {
        e.preventDefault();
        displyUl(this);
        }, false);
    }
}	

/*============= Isotope Portfolio =============*/

function enableIsotope() {
  // for each filters
  $(".portfolio-filters").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);

    // init isotope
    var grid = $buttonGroup.data("target");
    $(grid).imagesLoaded(function () {
      $(grid).isotope({
        itemSelector: ".portfolio-box",
        layoutMode: "packery",
        packery: {
          gutter: '.gutter-sizer'		  
        },
      });
    });

    // button click
    $buttonGroup.on("click", "li", function () {
      var $this = $(this);
      // filter isotope
      var filterValue = $this.attr("data-filter");
      $(grid).isotope({ filter: filterValue });
      // change selected
      $buttonGroup.find(".active").removeClass("active");
      $this.addClass("active");
    });
  });
}
enableIsotope();

