const list = {
  ru: [
    ["ё", "Ё"],
    ["1", "!"],
    ["2", '"'],
    ["3", "№"],
    ["4", ";"],
    ["5", "%"],
    ["6", ":"],
    ["7", "?"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
    ["Backspace", "Backspace"],
    ["Tab", "Tab"],
    ["й", "Й"],
    ["ц", "Ц"],
    ["у", "У"],
    ["к", "К"],
    ["е", "Е"],
    ["н", "Н"],
    ["г", "Г"],
    ["ш", "Ш"],
    ["щ", "Щ"],
    ["з", "З"],
    ["х", "Х"],
    ["ъ", "Ъ"],
    ["Delete", "Delete"],
    ["CapsLock", "CapsLock"],
    ["ф", "Ф"],
    ["ы", "Ы"],
    ["в", "В"],
    ["а", "А"],
    ["п", "П"],
    ["р", "Р"],
    ["о", "О"],
    ["л", "Л"],
    ["д", "Д"],
    ["ж", "Ж"],
    ["э", "Э"],
    ["\\", "|"],
    ["Enter", "Enter"],
    ["Shift", "Shift"],
    ["я", "Я"],
    ["ч", "Ч"],
    ["с", "С"],
    ["м", "М"],
    ["и", "И"],
    ["т", "Т"],
    ["ь", "Ь"],
    ["б", "Б"],
    ["ю", "Ю"],
    [".", "."],
    ["ᐃ", "ᐃ"],
    ["Shift", "Shift"],
    ["Ctrl", "Ctrl"],
    ["Win", "Win"],
    ["Alt", "Alt"],
    [" ", " "],
    ["Alt", "Alt"],
    ["Ctrl", "Ctrl"],
    ["ᐊ", "ᐊ"],
    ["ᐁ", "ᐁ"],
    ["ᐅ", "ᐅ"],
  ],
  en: [
    ["`", "~"],
    ["1", "!"],
    ["2", "@"],
    ["3", "#"],
    ["4", "$"],
    ["5", "%"],
    ["6", "^"],
    ["7", "&"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
    ["Backspace", "Backspace"],
    ["Tab", "Tab"],
    ["q", "Q"],
    ["w", "W"],
    ["e", "E"],
    ["r", "R"],
    ["t", "T"],
    ["y", "Y"],
    ["u", "U"],
    ["i", "I"],
    ["o", "O"],
    ["p", "P"],
    ["[", "["],
    ["]", "]"],
    ["Delete", "Delete"],
    ["CapsLock", "CapsLock"],
    ["a", "A"],
    ["s", "S"],
    ["d", "D"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["j", "J"],
    ["k", "K"],
    ["l", "L"],
    [";", ";"],
    ["'", "'"],
    ["\\", "|"],
    ["Enter", "Enter"],
    ["Shift", "Shift"],
    ["z", "Z"],
    ["x", "X"],
    ["c", "C"],
    ["v", "V"],
    ["b", "B"],
    ["n", "N"],
    ["m", "M"],
    [",", ","],
    [".", "."],
    ["/", "/"],
    ["ᐃ", "ᐃ"],
    ["Shift", "Shift"],
    ["Ctrl", "Ctrl"],
    ["Win", "Win"],
    ["Alt", "Alt"],
    [" ", " "],
    ["Alt", "Alt"],
    ["Ctrl", "Ctrl"],
    ["ᐊ", "ᐊ"],
    ["ᐁ", "ᐁ"],
    ["ᐅ", "ᐅ"],
  ],
};
let language = "";
if (localStorage.language === undefined) {
  language = "en";
  localStorage.language = language;
} else {
  language = localStorage.language;
}

function createKeyboard() {
  const section = document.createElement("section"); // общая секция
  const textarea = document.createElement("textarea"); // текстовое поле
  const keyboard = document.createElement("div"); // место для клавиатуры

  const row1 = document.createElement("div"); // строки
  const row2 = document.createElement("div");
  const row3 = document.createElement("div");
  const row4 = document.createElement("div");
  const row5 = document.createElement("div");

  const textAfter = document.createElement("div"); // текст после клавиатуры
  const check = document.createElement("p");

  section.classList.add("all");
  textarea.classList.add("textarea");
  keyboard.classList.add("keyboard");
  row1.classList.add("row");
  row2.classList.add("row");
  row3.classList.add("row");
  row4.classList.add("row");
  row5.classList.add("row");
  textAfter.classList.add("textAfter");
  check.classList.add("check");

  document.body.append(section);
  section.append(textarea);
  section.append(keyboard);
  section.append(textAfter);
  keyboard.append(row1);
  keyboard.append(row2);
  keyboard.append(row3);
  keyboard.append(row4);
  keyboard.append(row5);
  section.before(check);

  textAfter.innerHTML = "Чтобы изменить язык, нажмите Shift + Alt"; // текст апасля
  check.innerHTML =
    "Проверьте язык своей системы, чтобы все корректно работало, он должен совпадать с первоначальным языком клавиатуры";

  let a = 0;
  function lineComplete(numbers) {
    const finish = [];
    for (let i = 1; i <= numbers; i += 1) {
      const div = document.createElement("div");
      div.classList.add("letter");
      const span = document.createElement("span");
      div.append(span);
      if (language === "en") {
        span.append(list.en[a][0]);
        a += 1;
        finish.push(div);
      } else if (language === "ru") {
        span.append(list.ru[a][0]);
        a += 1;
        finish.push(div);
      }
    }
    return finish;
  }
  const line = document.querySelectorAll(".row");
  line[0].append(...lineComplete(14));
  line[1].append(...lineComplete(14));
  line[2].append(...lineComplete(14));
  line[3].append(...lineComplete(13));
  line[4].append(...lineComplete(9));
}
createKeyboard();

const textarea = document.querySelector("textarea"); // текстовое поле
const keyboard = document.querySelector(".keyboard"); // место для клавиатуры
const textAfter = document.querySelector(".textAfter"); // текст после клавиатуры

const p = document.createElement("p"); // Нажата клавиша КАПС

// ///////////////////////////////////////////////////////////////мышка
let caps = false;

keyboard.addEventListener("mousedown", (event) => {
  textarea.focus();

  if (event.target.textContent === "Tab") {
    // //////////////TAB
    event.preventDefault();
    textarea.value += "\t";
  }
  if (event.target.textContent === "Enter") {
    // //////////////ENTER
    textarea.value += "\n";
  }
  if (event.target.textContent === "Backspace") {
    // //////////////BACKSPACE
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
  }

  if (event.target.textContent === "CapsLock" && caps === false) {
    caps = true;
    p.innerHTML = "Нажата клавиша CapsLock";
    textAfter.append(p);
    let a = 14;
    const span = document.querySelectorAll("span");
    for (let i = 14; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][1];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][1];
        a += 1;
      }
    }
  } else if (event.target.textContent === "CapsLock" && caps === true) {
    caps = false;
    p.innerHTML = " ";
    const span = document.querySelectorAll("span");
    let a = 14;
    for (let i = 14; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][0];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][0];
        a += 1;
      }
    }
    caps = false;
    // console.log(caps);
  }

  if (event.target.textContent === "Shift") {
    const span = document.querySelectorAll("span");
    let a = 0;
    for (let i = 0; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][1];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][1];
        a += 1;
      }
    }
  }
  if (
    // ///////////////////////////////ОТОБРАЖЕНИЕ БУКВ
    event.target.textContent !== "Tab" &&
    event.target.textContent !== "Enter" &&
    event.target.textContent !== "Backspace" &&
    event.target.textContent !== "Shift" &&
    event.target.textContent !== "CapsLock" &&
    event.target.textContent !== "Win" &&
    event.target.textContent !== "Ctrl" &&
    event.target.textContent !== "Alt"
  ) {
    textarea.value += event.target.textContent;
  }
});

keyboard.addEventListener("mouseup", (event) => {
  textarea.focus();
  if (event.target.textContent === "Shift") {
    let a = 0;
    const span = document.querySelectorAll("span");
    for (let i = 0; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][0];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][0];
        a += 1;
      }
    }
  }
});

document.addEventListener("keydown", (event) => {
  textarea.focus();
  console.log(event.code);

  if (
    event.code === "Numpad1" ||
    event.code === "Numpad2" ||
    event.code === "Numpad3" ||
    event.code === "Numpad4" ||
    event.code === "Numpad5" ||
    event.code === "Numpad6" ||
    event.code === "Numpad7" ||
    event.code === "Numpad8" ||
    event.code === "Numpad9" ||
    event.code === "NumpadEnter" ||
    event.code === "NumpadAdd" ||
    event.code === "NumpadSubtract" ||
    event.code === "NumpadMultiply" ||
    event.code === "NumpadDivide"
  ) {
    event.preventDefault();
  }
  if (event.key === "Tab") {
    // //////////////TAB
    event.preventDefault();
    textarea.value += "\t";
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    textarea.value += "ᐃ";
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    textarea.value += "ᐊ";
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    textarea.value += "ᐅ";
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    textarea.value += "ᐁ";
  }

  for (let i = 0; i < 64; i += 1) {
    if (
      event.key === document.querySelectorAll("span")[i].textContent &&
      event.key !== "Alt" &&
      event.key !== "Ctrl" &&
      event.key !== "CapsLock" &&
      event.key !== "Shift" &&
      event.code !== "Numpad1" &&
      event.code !== "Numpad2" &&
      event.code !== "Numpad3" &&
      event.code !== "Numpad4" &&
      event.code !== "Numpad5" &&
      event.code !== "Numpad6" &&
      event.code !== "Numpad7" &&
      event.code !== "Numpad8" &&
      event.code !== "Numpad9" &&
      event.code !== "NumpadEnter" &&
      event.code !== "NumpadAdd" &&
      event.code !== "NumpadSubtract" &&
      event.code !== "NumpadMultiply" &&
      event.code !== "NumpadDivide"
    ) {
      document.querySelectorAll("span")[i].classList.add("active");
    }
  }
  if (event.code === "ControlLeft") {
    document.querySelector(".leftCtrl").classList.add("active");
  }
  if (event.code === "ControlRight") {
    document.querySelector(".rightCtrl").classList.add("active");
  }

  if (event.code === "AltLeft") {
    event.preventDefault();
    document.querySelector(".leftAlt").classList.add("active");
  }
  if (event.code === "AltRight") {
    event.preventDefault();
    document.querySelector(".rightAlt").classList.add("active");
  }

  if (event.code === "ShiftRight") {
    document.querySelector(".rightShift").classList.add("active");
  }
  if (event.code === "ShiftLeft") {
    document.querySelector(".leftShift").classList.add("active");
  }

  if (event.code === "CapsLock") {
    document.querySelector(".capslock").classList.add("active");
  }

  if (event.code === "ArrowUp") {
    document.querySelector(".arrowUp").classList.add("active");
  }
  if (event.code === "ArrowLeft") {
    document.querySelector(".arrowLeft").classList.add("active");
  }
  if (event.code === "ArrowRight") {
    document.querySelector(".arrowRight").classList.add("active");
  }
  if (event.code === "ArrowDown") {
    document.querySelector(".arrowDown").classList.add("active");
  }
  if (event.code === "MetaLeft") {
    event.preventDefault();
    document.querySelector(".metaLeft").classList.add("active");
  }
  // console.log(event.key);

  if (event.code === "CapsLock" && caps === false) {
    caps = true;
    p.innerHTML = "Нажата клавиша CapsLock";
    textAfter.append(p);
    let a = 14;
    const span = document.querySelectorAll("span");
    for (let i = 14; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][1];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][1];
        a += 1;
      }
    }
  } else if (event.code === "CapsLock" && caps === true) {
    caps = false;
    p.innerHTML = " ";
    const span = document.querySelectorAll("span");
    let a = 14;
    for (let i = 14; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][0];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][0];
        a += 1;
      }
    }
    caps = false;
    // console.log(caps);
  }

  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    const span = document.querySelectorAll("span");
    let a = 0;
    for (let i = 0; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][1];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][1];
        a += 1;
      }
    }
  }
});

document.addEventListener("keyup", (event) => {
  for (let i = 0; i < 64; i += 1) {
    if (
      event.key === document.querySelectorAll("span")[i].textContent &&
      event.key !== "Alt" &&
      event.key !== "Ctrl" &&
      event.key !== "CapsLock" &&
      event.key !== "Shift"
    ) {
      document.querySelectorAll("span")[i].classList.remove("active");
    }
  }
  if (event.code === "ControlLeft") {
    document.querySelector(".leftCtrl").classList.remove("active");
  }
  if (event.code === "ControlRight") {
    document.querySelector(".rightCtrl").classList.remove("active");
  }
  if (event.code === "AltLeft") {
    document.querySelector(".leftAlt").classList.remove("active");
  }
  if (event.code === "AltRight") {
    document.querySelector(".rightAlt").classList.remove("active");
  }
  if (event.code === "ShiftRight") {
    document.querySelector(".rightShift").classList.remove("active");
  }
  if (event.code === "ShiftLeft") {
    document.querySelector(".leftShift").classList.remove("active");
  }
  if (event.code === "CapsLock") {
    document.querySelector(".capslock").classList.remove("active");
  }

  if (event.code === "ArrowUp") {
    document.querySelector(".arrowUp").classList.remove("active");
  }
  if (event.code === "ArrowLeft") {
    document.querySelector(".arrowLeft").classList.remove("active");
  }
  if (event.code === "ArrowRight") {
    document.querySelector(".arrowRight").classList.remove("active");
  }
  if (event.code === "ArrowDown") {
    document.querySelector(".arrowDown").classList.remove("active");
  }

  if (event.code === "MetaLeft") {
    document.querySelector(".metaLeft").classList.remove("active");
  }

  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    let a = 0;
    const span = document.querySelectorAll("span");
    for (let i = 0; i < span.length; i += 1) {
      if (language === "en") {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.en[a][0];
        a += 1;
      } else {
        // eslint-disable-next-line prefer-destructuring
        span[i].innerHTML = list.ru[a][0];
        a += 1;
      }
    }
  }
});

// cмена языка

document.addEventListener("keydown", (event) => {
  // eslint-disable-next-line no-unused-vars
  let a = 0;
  textarea.focus();
  if (event.shiftKey && event.altKey && language === "en") {
    const span = document.querySelectorAll("span");
    for (let i = 0; i < span.length; i += 1) {
      // eslint-disable-next-line prefer-destructuring
      span[i].textContent = list.ru[i][0];
      localStorage.language = "ru";
      language = "ru";
    }
    a += 1;
  } else if (event.shiftKey && event.altKey && language === "ru") {
    const span = document.querySelectorAll("span");
    for (let i = 0; i < span.length; i += 1) {
      // eslint-disable-next-line prefer-destructuring
      span[i].textContent = list.en[i][0];
      language = "en";
      localStorage.language = "en";
    }
    a += 1;
  }
});

// //////////////////////style
const forStyle = document.querySelectorAll("span");

for (let a = 0; a < forStyle.length; a += 1) {
  if (forStyle[a].textContent === " ") {
    forStyle[a].classList.add("space");
  }
  if (forStyle[a].textContent === "Shift") {
    forStyle[a].classList.add("allShift");
  }
  if (list.en[a][0] === "Shift") {
    if (a === 42) {
      forStyle[a].classList.add("leftShift");
    } else if (a === 54) forStyle[a].classList.add("rightShift");
  }
  if (list.en[a][0] === "Alt") {
    if (a === 57) {
      forStyle[a].classList.add("leftAlt");
    } else if (a === 59) forStyle[a].classList.add("rightAlt");
  }
  if (list.en[a][0] === "Ctrl") {
    if (a === 55) {
      forStyle[a].classList.add("leftCtrl");
    } else if (a === 60) forStyle[a].classList.add("rightCtrl");
  }
  if (forStyle[a].textContent === "CapsLock") {
    forStyle[a].classList.add("capslock");
  }
  if (list.en[a][0] === "Ctrl") {
    if (a === 55) {
      forStyle[a].classList.add("leftCtrl");
    } else if (a === 60) forStyle[a].classList.add("rightCtrl");
  }

  if (forStyle[a].textContent === "ᐊ") {
    forStyle[a].classList.add("arrowLeft");
  }
  if (forStyle[a].textContent === "ᐁ") {
    forStyle[a].classList.add("arrowDown");
  }

  if (forStyle[a].textContent === "ᐅ") {
    forStyle[a].classList.add("arrowRight");
  }

  if (forStyle[a].textContent === "ᐃ") {
    forStyle[a].classList.add("arrowUp");
  }
  if (forStyle[a].textContent === "Win") {
    forStyle[a].classList.add("metaLeft");
  }
}

// /////////////////////////////////анимация
