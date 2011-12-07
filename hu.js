var click_evt = document.createEvent("MouseEvents");
click_evt.initMouseEvent("click", true, true, window,
                    0, 0, 0, 0, 0, false, false, false, false, 0, null);

document.getElementsByClassName("a-j fd")[0].dispatchEvent(click_evt);
