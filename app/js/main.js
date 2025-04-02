jQuery(document).ready(function () {
  "use script";
  /*blur text block*/
  $("#input_fonts").on('input', function () {
    var inputValue = $(this).val();
    $("._preview").text(inputValue);
  });
  /*show modal*/
  $("._font").on("click", function () {
    var fontPreview = $(this).find(".font__preview").text();
    var fontName = $(this).find(".font__name").text();
    $("#modal").addClass("modal__open");
    $("body").css({ "overflow": "hidden" });
    /*write input*/
    $("#fontLine").val(/*"Надпис:" + fontPreview +*/ "Шрифт: " + fontName);
    $("._modalPreview").text(fontPreview);
  });
  /*modal close*/
  $("#closeModal").on("click", function () {
    $("#modal").removeClass("modal__open");
    $("body").removeAttr("style");
    $("#fontLine").val("");
    $("._modalPreview").text("");
  });
  /*modal mask close*/
  var wWidth = $(window).width();
  if (wWidth <= 768) {
    $(".modal__mask").on("click", function () {
      $("#modal").removeClass("modal__open");
      $("body").removeAttr("style");
      $("#fontLine").val("");
      $("._modalPreview").text("");
    });
    $(".modal__body").on("click", function (event) {
      event.stopPropagation();
    });
  }
});