$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Yes, I am!</li>");
    $("ul#webpage").prepend("<li>Are you hungry!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).toggleClass("background-blue");
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).toggleClass("background-blue");
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>I want to eat pizza!</li>");
    $("ul#webpage").prepend("<li>What do you want to eat!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).toggleClass("background-green");
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).toggleClass("background-green");
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Pizza is like fastfood.</li>");
    $("ul#webpage").prepend("<li>Are you sure you don't want fastfood?</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).toggleClass("background-red");
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).toggleClass("background-red");
    });
  });

    $("button#before").click(function() {
      $("div#start").before("<h2>Practice adding before</h2>");
      $("h2").click(function(){
        $(this).remove();
      });
    });

    $("button#after").click(function() {
      $("div#start").after("<h2>Practice adding after</h2>");
      $("h2").click(function(){
        $(this).remove();
      });
    });


});
