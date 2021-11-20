import modals from "./modules/modals";
import smoothScroll from "./modules/smoothScroll";
import timer from "./modules/timer";
import calc from "./modules/calc";
import checkForms from "./modules/checkForms";

modals();
smoothScroll();
timer("24 november 2021");
if (window.location.toString().indexOf("balkony.html") > 0) {
  calc();
}
checkForms();
