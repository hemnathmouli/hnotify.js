var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

$(document).ready(function(){
  $(document).on("click", ".btn", function (e) {
    var type = $(this).attr("for-type");
    $.hnotify({
        text: "Hey there, this notification is for "+type, //Text to show in the notification
        flag: type, //type of notification e.g success or warning, etc
        interval: 3000 //Hide automatically after this interval 1 sec = 1000
    });
    e.preventDefault();
  });
});
