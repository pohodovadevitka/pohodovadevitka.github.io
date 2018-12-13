requirejs.config({
  baseUrl: "js",
  paths: {
    bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min",
    jquery: "https://code.jquery.com/jquery-3.3.1"
  }
});

require(["bootstrap"], function (bootstrap) {
  /*
  $('[data-toggle="popover"]').popover();

  $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
    if (
      !$(this)
        .next()
        .hasClass("show")
    ) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    const $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function(e) {
        $(".dropdown-submenu .show").removeClass("show");
      });

    return false;
  });
  */
});
