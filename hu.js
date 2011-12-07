var hu = "呼...";
var click_evt = document.createEvent("MouseEvents");
click_evt.initMouseEvent("click", true, true, window,
                          0, 0, 0, 0, 0, false, false, false, false, 0, null);
var key_evt = document.createEvent("KeyboardEvent");
key_evt.initKeyboardEvent("keypress", true, true, null,
                          false, false, false, false, 32, 0);

document.getElementsByClassName("a-j fd")[0].dispatchEvent(click_evt);
var edit_box = document.getElementsByClassName("m-n-f-ba-rd editable")[0];
edit_box.innerHTML = hu;
edit_box.dispatchEvent(key_evt);
document.getElementsByClassName("a-l-k e-b e-b-na")[0].dispatchEvent(click_evt);
