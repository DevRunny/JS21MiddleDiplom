import { animate } from "./animate";

const modals = () => {
  const modalContent = document.querySelectorAll(".fancybox-skin");
  const headerModal = document.querySelector(".header-modal");
  const serviceModal = document.querySelector(".services-modal");
  const overlay = document.querySelector(".overlay");
  const callBack = document.querySelector(".button");
  const serviceButtons = document.querySelectorAll(".service-button");

  try {
    callBack.addEventListener("click", () => {
      headerModal.style.display = "block";
      overlay.style.display = "block";
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          headerModal.style.opacity = progress;
          overlay.style.opacity = progress;
        },
      });
    });
  } catch (error) {
    console.log(error.message);
  }

  try {
    serviceButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        serviceModal.style.display = "block";
        overlay.style.display = "block";
        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            serviceModal.style.opacity = progress;
          },
        });
      });
    });
  } catch (error) {
    console.log(error.message);
  }

  try {
    modalContent.forEach((obj) => {
      obj.addEventListener("click", (e) => {
        if (e.target.classList.contains("header-modal__close")) {
          headerModal.style.display = "none";
          overlay.style.display = "none";
        } else if (e.target.classList.contains("services-modal__close")) {
          serviceModal.style.display = "none";
          overlay.style.display = "none";
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default modals;
