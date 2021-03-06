function loadArticles(weekNumber){
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1t52h4iKh2TaUkzeZZLqX3J8QEcCg-Wn1Ku2UNQISaFQ/od6/public/values?alt=json",
    success: function(data) {
      data = data.feed.entry;
      console.log(data);
      var template = $('#handlebars-articles').html();
      var templateScript = Handlebars.compile(template);

      for (var i = 0; i < data.length; i++){
        if (weekNumber == data[i].gsx$week.$t){
          var html = templateScript(data[i]);
          $("#frozen-fridays-week-" + weekNumber).replaceWith(html);
        }
      }

    }
  });
  $(document).ajaxComplete(function(){
    $(".redirect").click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeTo(500, 0, redirectPage);
    });
  });
}
function redirectPage() {
    window.location = linkLocation;
}

$(document).ready(function() {
  $("body").delay(300).fadeTo(600, 1);
  $(".redirect").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeTo(500, 0, redirectPage);
  });
});
