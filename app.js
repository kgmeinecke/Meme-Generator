// ===========================
//       Variables
// ===========================

let currentRowID = 1;
let row = null;
let idCount = 1;
// ===========================
//      Query Selectors
// ===========================

// form query selector
const addMemeForm = document.querySelector("#form");
// main div query selector
const mainDiv = document.querySelector("#main");
// row div query selector
const rowDiv = document.querySelector(".start");
// URL input query seletor
let urlInput = document.querySelector("#urlInput");
// topText input query selector
let topText = document.querySelector("#topText");
// bottomeText input query selector
let bottomText = document.querySelector("#bottomText");

let divs = document.querySelectorAll("#main");

// ===========================
//         Listeners
// ===========================

for (let div of divs) {
  div.addEventListener("mouseover", function(e) {
    if (
      e.target.childElementCount === 0 &&
      e.target.childElementCount !== 4 &&
      e.target.nextSibling !== null
    ) {
      e.target.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
      e.target.nextSibling.nextSibling.nextSibling.classList.add("display");
    }
  });
}

// for (let div of divs) {
//   div.addEventListener("mouseover", function(e) {
//     let newTarget = document.querySelectorAll("img");
//     if (e.target.childElementCount === 0) {
//       console.log("case 1");
//       if (e.target.id === newTarget[0].id) {
//         console.log("case 2");
//         newTarget[0].nextSibling.nextSibling.nextSibling.classList.add(
//           "display"
//         );
//         newTarget[0].nextSibling.nextSibling.nextSibling.classList.remove(
//           "hidden"
//         );
//       } else if (e.target.id === newTarget[1].id) {
//         console.log("case 3");
//         newTarget[1].nextSibling.nextSibling.nextSibling.classList.add(
//           "display"
//         );
//         newTarget[1].nextSibling.nextSibling.nextSibling.classList.remove(
//           "hidden"
//         );
//       }
//     }
//   });
// }

for (let div of divs) {
  div.addEventListener("mouseout", function(e) {
    let targetDiv = document.querySelector(".display");
    if (
      e.target !== null &&
      e.target.childElementCount === 0 &&
      targetDiv !== null
    ) {
      targetDiv.classList.add("hidden");
      targetDiv.classList.remove("display");
    }
  });
}

// remove memes
for (let div of divs) {
  div.addEventListener("click", function(e) {
    if (e.target.parentElement.parentElement.childElementCount === 2) {
      e.target.parentElement.remove();
    } else {
      e.target.parentElement.parentElement.remove();
    }
  });
}

// Add Meme button
addMemeForm.addEventListener("submit", function(e) {
  // prevent page from reloading when submitting form
  e.preventDefault();

  // create firs row div
  if (mainDiv.childElementCount === 0) {
    row = createRowDiv();
    mainDiv.append(row);
  }

  // create meme
  if (row.id === currentRowID.toString() && row.childElementCount < 2) {
    // create meme function call
    createMeme();
    idCount++;
    // create new row and meme
  } else {
    currentRowID++;
    row = createRowDiv();
    mainDiv.append(row);
    createMeme();
    idCount++;
  }

  //reset form
  addMemeForm.reset();
});

// ===========================
//        functions
// ===========================

function createMeme() {
  // create new div tag
  let newDiv = createDiv();
  // giv div bootstrap class
  newDiv.classList.add("col-sm");
  // create new img tag
  let newImage = createImg();
  // giv img bootstrap class
  newImage.classList.add("img-thumbnail");
  newImage.id = idCount;
  // create url string
  let url = urlInput.value;
  // add url to src
  newImage.src = url;
  // append newImage to newDiv
  newDiv.append(newImage);
  // creat topDiv
  let topDiv = createDiv();
  // creat top string
  let textTop = topText.value;
  // append top string to topDiv
  topDiv.innerText = textTop;
  // give topDiv a class
  topDiv.classList.add("top");
  // append topDiv to newDiv
  newDiv.append(topDiv);
  // create bottomDiv
  let bottomDiv = createDiv();
  // create bottom string
  let textBottom = bottomText.value;
  // append bottom string to bottomDiv
  bottomDiv.innerText = textBottom;
  // give bottomDiv a class
  bottomDiv.classList.add("bottom");
  // append bottomDiv to newDiv
  newDiv.append(bottomDiv);
  // create hiddenDiv
  let hiddenDiv = createDiv();
  // create hiddenDiv string
  let hiddenText = "Click to Remove Meme";
  // append hiddenText to hiddenDiv
  hiddenDiv.innerText = hiddenText;
  // give hiddenDiv  2 classes
  hiddenDiv.classList.add("img-thumbnail");
  hiddenDiv.classList.add("hidden");
  //append hiddenDiv to newDiv
  newDiv.append(hiddenDiv);
  //append newDiv to mainDiv
  row.append(newDiv);
}

function createRowDiv() {
  let newRowDiv = createDiv();
  newRowDiv.classList.add("row");
  newRowDiv.id = currentRowID;
  return newRowDiv;
}

function createDiv() {
  return document.createElement("div");
}

function createImg() {
  return document.createElement("img");
}
