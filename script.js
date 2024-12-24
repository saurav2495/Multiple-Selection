var body = document.querySelector("body");
var btns = document.querySelectorAll("button");

btns.forEach((item) => {
  item.addEventListener("click", () => {
    body.style.backgroundColor = item.innerHTML;
  });
});
