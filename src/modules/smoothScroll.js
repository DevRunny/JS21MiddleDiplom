import { animate } from "./animate";

const smoothScroll = () => {
  const btnToTop = document.querySelector(".smooth-scroll");

  const showBtn = () => (btnToTop.style.display = "block");
  const hideBtn = () => (btnToTop.style.display = "none");

  document.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      hideBtn();
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          btnToTop.style.opacity = progress;
        },
      });
    } else {
      showBtn();
    }
  });

  btnToTop.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export default smoothScroll;
