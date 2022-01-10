$(document).ready(function () {

  var $container = $(".grid");

  $container.masonry({
    columnWidth: ".grid-item",
    itemSelector: ".grid-item",
    isFitWidth: true,
    gutter: 60
  });


})