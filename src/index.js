import modals from "./modules/modals";
import smoothScroll from "./modules/smoothScroll";
import timer from "./modules/timer";
import calc from "./modules/calc";
import checkForms from "./modules/checkForms";
import sendForm from "./modules/sendForm";

modals();
smoothScroll();
timer("26 november 2021");
if (window.location.toString().indexOf("balkony.html") > 0) {
  calc();
}
checkForms();

sendForm({
  formId: "form1",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formId: "form2",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formId: "form3",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formId: "form4",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formId: "form5",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formId: "form6",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});

sendForm({
  formId: "form7",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
