function fadeIns(classes, speed){
  var delays = 700
  for (var i = 0; i < classes.length; i++){
    $(classes[i]).delay(delays).fadeTo(500, 1);
    delays += speed[i]
  }
}

$(document).ready(function() {
  var fade_classes = [".center-img", ".series-description", ".week-1", ".week-2", ".week-3", ".week-4", ".week-5", ".navbar-content"];
  var speed = [1000, 600, 250, 250, 250, 250, 250, 200];
  fadeIns(fade_classes, speed);


});
