// ===========================
//       Variables
// ===========================

let currentRowID = 1;
let row = null;
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

// ===========================
//        Assignments
// ===========================

//rowDiv.id = currentRowID;

// ===========================
//         Listeners
// ===========================

// Add Meme button
addMemeForm.addEventListener("submit", function(e) {
  // prevent page from reloading when submitting form
  e.preventDefault();

  // create firs row div
  if (mainDiv.childElementCount === 0) {
    row = createRowDiv();
    mainDiv.append(row);
    console.log("case 0");
  }

  // create meme
  if (row.id === currentRowID.toString() && row.childElementCount < 2) {
    // create meme function call
    createMeme();
    console.log("case 1");

    // create new row and meme
  } else {
    currentRowID++;
    row = createRowDiv();
    mainDiv.append(row);
    createMeme();
    console.log("case 2");
  }

  //reset form
  addMemeForm.reset();
  console.log("added image");
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
