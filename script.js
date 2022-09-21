let listItem = document.getElementsByTagName("LI");
let close = document.getElementsByClassName("close");
let list = document.querySelector("ul");

closeBtn();
hideListItem();
checkedSymbol();

// Create close btn for each list item
function closeBtn() {
  let i;
  for (i = 0; i < listItem.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    listItem[i].appendChild(span);
  }
}

// If click on close btn, hide the list item
function hideListItem() {
  let j;
  for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
      let section = this.parentElement;
      section.style.display = "none";
    };
  }
}

// Add a checked symbol when clicking on a list item
function checkedSymbol() {
  list.addEventListener(
    "click",
    function (check) {
      if (check.target.tagName === "LI") {
        check.target.classList.toggle("checked");
      }
    },
    false
  );
}

// Create a new list item when clicking on the add button
function newItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  closeBtn();
  hideListItem();
}

// Creation of dark-theme class on click
document.getElementById("toggle").addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
  document
    .getElementsByTagName("section")[0]
    .classList.toggle("dark-theme_section");
  document
    .getElementsByTagName("button")[0]
    .classList.toggle("dark-theme_button");
});
