//Constants and Variables :

//--------------------------------------------------------------------------------------------------------------------

const settingButtons = document.querySelectorAll(".setting__b");
const newGame = document.querySelector(".newGame");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const A = document.querySelector(".a");
const easy = document.querySelector(".easyB");
const easyRow = document.querySelector(".easy");
const hard = document.querySelector(".hardB");
const hardRow = document.querySelector(".hard");
const rows = document.querySelectorAll(".row");
let difficult = false;
const winningLogo = document.querySelector(".winning");
const winningMessage = document.querySelector(".winingMessage");
const background = document.querySelector(".colors");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Functions :

//--------------------------------------------------------------------------------------------------------------------

//button animation, when the mouse goes on them.
const mouseEnterButtons = function () {
  for (i = 0; i < settingButtons.length; i++) {
    settingButtons[i].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "grey";
      e.target.style.color = "white";
      e.target.style.transition = "0.3s";
    });
  }
};

//.................................................

//button animations, when the mouse comes out of them.
const mouseOutButton = function () {
  newGame.addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.style.transition = "0.3s";
  });
  easy.addEventListener("mouseleave", function (e) {
    if (difficult == true) {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
    }
  });
  hard.addEventListener("mouseleave", function (e) {
    if (difficult == false) {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
    }
  });
};

//--------------------------------------------------------------------------------------------------------------------

//when we click on 'easy' button, the 'difficult' variable becomes 'false', and . . .
//the 'hard' button color becomes white(de-active).
const clickOnEasyButton = function () {
  easy.addEventListener("click", function (e) {
    difficult = false;
    hard.style.backgroundColor = "white";
    hard.style.color = "black";
    console.log(difficult);
  });
};

//................................................

//when we click on 'hard' button, the 'difficult' variable becomes 'true', and . . .
//the 'easy' button color becomes white(de-active).
//we use the variable 'difficult', for 'New Color' button.
const clickOnHardButton = function () {
  hard.addEventListener("click", function (e) {
    difficult = true;
    easy.style.backgroundColor = "white";
    easy.style.color = "black";
    console.log(difficult);
  });
};

//---------------------------------------------------------------------------------------------------------------------------------

//this function makes an array of numbers of choices, to indicate them -unordered(by chance.
//1. it makes an empty array.
//2. it makes random numbers between 1 and 'choices'(1-3 or 1-6) many times(to be sure that all of the number in this range are chosen by random).
//3. it pushes all of random generated numbers into the empty array.
//4. it returns a new array from the generated array with no-repeated cells(named to 'uniqueIndex') , using 'new Set(array)' function.
const makeArrayToIndicateChoices = function () {
  let colorNum = [];
  for (j = 0; j < 100; j++) {
    let index = Math.trunc(Math.random() * choices) + 1;
    colorNum.push(index);
  }
  return (uniqueIndex = [...new Set(colorNum)]);
};

//......................................................

//it indicates the colors(choices)
//1. it defines the 'color' variable as the colors(choices), by their class that for each are named like '.color1', '.color2', ...; and it picks the class number by the array 'uniqueIndex'.
//2. also it give colors to the choices(the random generated 'rgba' are given to the backgroundColor of each button(choice)).
const indicateChoicesANDcolorThem = function () {
  return (
    (color = document.querySelector(`.color${uniqueIndex[i]}`)),
    (color.style.backgroundColor = `rgba(${r},${g},${b},${a})`)
  );

  console.log(uniqueIndex);
};

//......................................................

//when we click on a choice:
//if the choice we have chosen, is the right one(the button backgroundColor rgba is the rgba that is shown on the header), the player has won;
//when the player wins:
//1. all of the choices wouldn't be displayed anymore. (using loop, to done the function to all of the rows(if there were 2rows on hard mode)).
//2. the winning message will be displayed.(in fact the 'div' around of the winning message will change into 'flex' from 'none'.).
//3. background color will change into the color of the right choice.
const clickOnEachChoice = function () {
  color.addEventListener("click", function (e) {
    if (
      e.target.style.backgroundColor ===
      `rgba(${red.textContent}, ${green.textContent}, ${blue.textContent}, ${A.textContent})`
    ) {
      for (n = 0; n < rows.length; n++) {
        rows[n].style.display = "none";
      }

      winningLogo.style.display = "flex";

      background.style.backgroundColor = e.target.style.backgroundColor;
    }
    console.log(e.target.style.backgroundColor);
  });
};

//....................................................

//if:
//if the 'difficult' variable is 'false' (the 'easy' button is chosen):
//1. no maters that rows in which condition, 1 row will be shown,
//2. 'choices' variable value will be 3 (number of choices).

//else:
//if the 'difficult' variable is 'true' (the 'hard' button is chosen):
//1. no maters that rows in which condition, 2 row will be shown,
//2. 'choices' variable value will be 6 (number of choices).
const easyORhard_newGame = function () {
  if (difficult == false) {
    hardRow.style.display = "none";
    easyRow.style.display = "flex";
    return (choices = 3);
  } else {
    hardRow.style.display = "flex";
    easyRow.style.display = "flex";
    return (choices = 6);
  }
};

//..................................................

//this function will makes new colors and choices(it's for a new game):
//1. it generates random 'rgba' by the 'choice' number that has been defined by 'easy' or 'hard'.
//2. it saves one of the color codes which are generated, on the 'R G B A ( , , , )' in the header.
//3. it calls and renders 'makeArrayToIndicateChoices' function.
//4. it calls and renders 'indicateChoicesANDcolorThem' function.
//5. it calls and renders 'clickOnEachChoice' function.
const makeNewColorsANDchoices = function () {
  for (i = 0; i < choices; i++) {
    (r = Math.trunc(Math.random() * 256)),
      (g = Math.trunc(Math.random() * 256)),
      (b = Math.trunc(Math.random() * 256)),
      (a = Number(Math.random().toFixed(2))),
      (red.textContent = r),
      (green.textContent = g),
      (blue.textContent = b),
      (A.textContent = a),
      //......................
      makeArrayToIndicateChoices(),
      //......................
      indicateChoicesANDcolorThem(),
      //......................
      clickOnEachChoice();
  }
};

//...................................................

//when the player wins, the winning message comes on background, so for a new game, the message must be hidden, and be replaced by new choices;
//1. so 'display' of 'div' around the winning message will become 'none' from 'flex';
//2. and  also the background color becomes #222 from the wining color.(winning color is color of the right choice of last round playing).
const makeNewGame = function () {
  winningLogo.style.display = "none";
  background.style.backgroundColor = "#222";
};

//---------------------------------------------------------------------------------------------------------------------------------

//when we click on 'New Color', a new game will start by the following steps below:
//1. it calls and renders 'makeNewGame' function.
//2. it calls and renders 'easyORhard_newGame' function.
//3. it calls and renders 'makeNewColorsANDchoices' function.
const clickOnNewColorButton = function () {
  newGame.addEventListener("click", function () {
    makeNewGame();
    //......................
    easyORhard_newGame();
    //......................
    makeNewColorsANDchoices();
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Calling functions :

//--------------------------------------------------------------------------------------------------------------------------------

//the function 'mouseEnterButtons' is called and rendered.
mouseEnterButtons();

//...................................................

//the function 'mouseOutButton' is called and rendered.
mouseOutButton();

//...................................................

//the function 'clickOnEasyButton' is called and rendered.
clickOnEasyButton();

//...................................................

//the function 'clickOnHardButton' is called and rendered.
clickOnHardButton();

//...................................................

//the function 'clickOnNewColorButton' is called and rendered.
clickOnNewColorButton();
