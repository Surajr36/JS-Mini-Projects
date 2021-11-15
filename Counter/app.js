let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const classNames = e.currentTarget.classList;
    // console.log(classNames);
    if (classNames.contains("decrease")) {
      count--;
    } else if (classNames.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
