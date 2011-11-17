(function () {
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js";
  var d = document.getElementsByTagName('script')[0];
  d.parentNode.insertBefore(s, d);
})();


window.setInterval(function () {
  $("button[title='Click to +1 this post']").click();
  $("button[title='Click to +1 this comment']").click();
}, 500);
