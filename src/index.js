import modals from "./modules/modals";
import smoothScroll from "./modules/smoothScroll";
import timer from "./modules/timer";
import calc from "./modules/calc";
import checkForms from "./modules/checkForms";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";

modals();
smoothScroll();
timer("27 november 2021");
if (window.location.toString().indexOf("balkony.html") > 0) {
  calc();
}
checkForms();
slider({
  sliderBlockId: "benefits",
  slidesClass: "benefits__item",
  slideActiveClass: "benefits__item-active",
  slideArrowLeft: "benefits__arrow--left",
  slideArrowRight: "benefits__arrow--right",
});
slider({
  sliderBlockId: "services",
  slidesClass: "service-block",
  slideActiveClass: "service-block-active",
  slideArrowLeft: "services__arrow--left",
  slideArrowRight: "services__arrow--right",
});
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
