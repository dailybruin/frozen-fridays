$(document).ready(function() {
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1t52h4iKh2TaUkzeZZLqX3J8QEcCg-Wn1Ku2UNQISaFQ/od6/public/values?alt=json",
    success: function(data) {
      data = data.feed.entry;
      console.log(data);
    }
  });
});
