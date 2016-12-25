(function() {
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://liuchong.me/downloads/jquery-3.1.1.min.js";
  var d = document.getElementsByTagName('script')[0];
  d.parentNode.insertBefore(s, d);

  var command = "$(function() { alert('Hi!')} );";

  window.setInterval(function() {
    $("#a[class='item']").click();
  }, 2000);
})();
