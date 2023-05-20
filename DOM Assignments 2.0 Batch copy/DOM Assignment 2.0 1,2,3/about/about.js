let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


// task1

let val = document.getElementById("contact");
val.innerText = "projects";

var h3Elements = document.getElementsByTagName("h3");
for (var i = 0; i < h3Elements.length; i++) {
  h3Elements[i].style.backgroundColor = "#bcb2fe";
}


