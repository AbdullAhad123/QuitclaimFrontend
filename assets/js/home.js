// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    575: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// stats counter
$(document).ready(function () {
  function runCounter() {
    $(".statsCounter").each(function () {
      var $this = $(this);
      var countTo = $this.attr("data-target");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 1500,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  $("#stats").waypoint(
    function () {
      runCounter();
      this.destroy(); // Ensures the animation runs only once
    },
    {
      offset: "75%", // Trigger when the element is 75% into the viewport
    }
  );
});

// faq
$(".faq_item_btn").click(function () {
  const icon = $(this).find(".faq_icon");
  icon.toggleClass("toggleIcon");
});

// contact
$("#sendContact").click(function (e) {
  e.preventDefault();
  const name = $("#name").val();
  const phone = $("#phone").val();
  const email = $("#email").val();
  const message = $("#message").val();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (message == "") {
    $("#message").addClass("is-invalid");
    $("#message").focus();
    $("#messageErr").removeClass("visually-hidden");
} else {
      $("#messageErr").addClass("visually-hidden");
    $("#message").removeClass("is-invalid");
  }
  if (email == "") {
    $("#email").addClass("is-invalid");
    $("#email").focus();
    $("#emailErr").removeClass("visually-hidden");
    $("#emailErr").removeClass("visually-hidden").text('The email field is required');
} else if (!emailRegex.test(email)) {
    $("#email").addClass("is-invalid");
    $("#email").focus();
    $("#emailErr").removeClass("visually-hidden").text('Please enter a valid email');
} else {
    $("#email").removeClass("is-invalid");
    $("#emailErr").addClass("visually-hidden");
  }
  if (phone == "") {
    $("#phone").addClass("is-invalid");
    $("#phone").focus();
    $("#phoneErr").removeClass("visually-hidden");
} else {
      $("#phoneErr").addClass("visually-hidden");
    $("#phone").removeClass("is-invalid");
  }
  if (name == "") {
    $("#name").addClass("is-invalid");
    $("#name").focus();
    $("#nameErr").removeClass("visually-hidden");
} else {
      $("#nameErr").addClass("visually-hidden");
    $("#name").removeClass("is-invalid");
  }

//   if (name &&) {
    
//   }

});
