/**
 * useage
 *  on loction type: 
 *    javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='https://raw.github.com/liu-chong/test_js/master/auto_plus_gplus.js';void(0);
 *
 */
(function() {
  var jquery_js_src = "http://code.jquery.com/jquery-1.7.min.js";
  var jquery_doc_script = document.createElement('script');
  jquery_doc_script.type = 'text/javascript';
  jquery_doc_script.async = true;
  jquery_doc_script.src = jquery_js_src;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(jquery_doc_script, s);
})();
window.setTimeout(function() {
  var puls_all_post_comment = function () {
    $("button[title='Click to +1 this post']").click();
    $("button[title='Click to +1 this comment']").click();
  };
  window.setInterval(puls_all_post_comment, 2000);
}, 2000);
