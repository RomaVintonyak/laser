jQuery(document).ready(function () {
  "use script";
  /*blur text block*/
  $("#input_fonts").on('input', function(){
    var inputValue = $(this).val();
    $("._preview").text(inputValue);
  });
  $("._font").on("click", function(){
    var fontPreview = $(this).find(".font__preview").text();
    var fontName = $(this).find(".font__name").text();
    
  });
});