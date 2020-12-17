// Honeypot
var mobile = "06 ";
var telephone = "020 ";
var email = "info";
mobile += "49 ";
telephone += "772 ";
email += "@jellekuiper.nl";
mobile += "84 ";
telephone += "45 ";
mobile += "86 ";
telephone += "79";
mobile += "01";

if ($(".mob").length > 0) {
  $(".mob")
    .attr("href", "tel:" + mobile.replace(/ +/g, ""))
    .text(mobile);
}

if ($(".tel").length > 0) {
  $(".tel")
    .attr("href", "tel:" + telephone.replace(/ +/g, ""))
    .text(telephone);
}

if ($(".mail").length > 0) {
  $(".mail")
    .attr("href", "mailto:" + email)
    .text(email);
}

// form
var $contactForm = $(".contactform");

$(".send").on("click", function (e) {
  $(".load-wrapper").addClass("visible");
  $(".overtake").addClass("visible");

  if ($("#email").val()) return false; // honeypot

  const body = {
    name: $("#name").val(),
    subject: $("#subject").val(),
    email: $("#mail").val(),
    honeypot: $("#email").val(),
    message: $("#message").val(),
  };
  let mailHandler;
  if (!window.location.href.includes("localhost")) {
    mailHandler = "https://mailhandler.danielgroen.nl";
  } else {
    mailHandler = "http://mailhandler.test";
  }

  e.preventDefault();
  axios
    .post(mailHandler, { jellekuiper: body })
    .then((res) => {
      $(".load-wrapper").removeClass("visible");
      $(".thankyou").addClass("visible");
      $(".thankyou .send, .overtake").on("click touch", function () {
        location.reload();
      });
      console.log("success");
    })
    .catch((err) => {
      console.log(err);
      // catch error
    });
});
