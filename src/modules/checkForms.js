const checkForms = () => {
  const calcBlock = document.getElementById("calc");
  const calcInput = document.getElementById("calc-input");

  if (window.location.toString().indexOf("balkony.html") > 0) {
    calcBlock.addEventListener("input", (e) => {
      e.preventDefault();

      calcInput.type = "text";

      calcInput.value = calcInput.value.replace(/\D+/, "");
    });
  }
};

export default checkForms;
