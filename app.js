// ===========================
//      Query Selectors
// ===========================

// form query selector
const addMemeForm = document.querySelector("#form");
// row div query selector
const rowDiv = document.querySelector("#row");
// URL input query seletor
let urlInput = document.querySelector("#urlInput");
// topText input query selector
let topText = document.querySelector("#topText");
// bottomeText input query selector
let bottomText = document.querySelector("#bottomText");

// ===========================
//         Listeners
// ===========================

// Add Meme button
addMemeForm.addEventListener("submit", function(e) {
  // prevent page from reloading when submitting form
  e.preventDefault();
  // create meme function call
  createMeme();
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
  rowDiv.append(newDiv);
}

function createDiv() {
  return document.createElement("div");
}

function createImg() {
  return document.createElement("img");
}
