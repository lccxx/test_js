/**
 * useage
 *  on location bar type: 
 *    javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://goo.gl/jz0N7';void(0);
 *
 */
(function() {
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js";
  var d = document.getElementsByTagName('script')[0];
  d.parentNode.insertBefore(s, d);

  window.setTimeout(function() {
    var puls_all_post_comment = function () {
      $("button[title='Click to +1 this post']").click();
      $("button[title='Click to +1 this comment']").click();
    };
    window.setInterval(puls_all_post_comment, 2000);
  }, 2000);
})();
