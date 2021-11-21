import modals from "./modules/modals";
import smoothScroll from "./modules/smoothScroll";
import timer from "./modules/timer";
import calc from "./modules/calc";
import checkForms from "./modules/checkForms";
import sendForm from "./modules/sendForm";

modals();
smoothScroll();
timer("24 november 2021");
if (window.location.toString().indexOf("balkony.html") > 0) {
  calc();
}
checkForms();
sendForm({
  formName: "form[name=action-form]",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "form[name=action-form2]",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "form[name=callback-form]",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "form[name=application-form]",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
