/**
 * useage
 *  on location bar type: 
 *    javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='https://github.com/liu-chong/test_js/blob/master/auto_plus_gplus.js';void(0);
 *
 */
(function() {
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js";
  var d = document.getElementsByTagName('script')[0];
  d.parentNode.insertBefore(s, d);

  window.setInterval(function() {
    $("button[title='Click to +1 this post']").click();
    $("button[title='Click to +1 this comment']").click();
  }, 2000);
})();
