$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// Disable right-click on images
$(document).ready(function () {
  $("img").on("contextmenu", function () {
    return false;
  });
});

// Disable right-click on webpage
$(document).bind("contextmenu", function (e) {
  return false;
});

// PrasadBlogs Script

var temp = "";
$.ajax({
  type: "GET",
  url: "https://dev.to/api/articles?username=varaprasad_gudi",
  dataType: "json",
  success: function (json) {
    //console.log(json);
    json.forEach((element) => {
      temp += "<div class='col-4 card bg-dark text-center'>";
      // temp += "<p>" + element.published_at + "</p>"
      temp +=
        "<img class='card-img' src='" +
        element.cover_image +
        "' alt='blog cover'>";
      temp += "<h2 class='mt-2 card-title'>" + element.title + "</h2>";
      temp += "<p class='mt-3 card-text'>" + element.description + "</p>";
      temp +=
        "<a class='btn btn-success' target='_blank' href=" +
        element.url +
        ">Read More..</a>";
      temp += "</div>";
    });
    document.getElementById("myblog").innerHTML = temp;
  },
});
// console.log(temp);

// PrasadBlogs Script
