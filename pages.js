let url = window.location.href;
console.log("url: ", url)
let lastPart = url.split('/').pop();  // "index.html"
console.log("lastPart: ", lastPart);


// Determine the prefix for hrefs
let dir_index = lastPart === "index.html" ? "" : "../";
let dir_pages = lastPart === "index.html" ? "pages/" : "";


const navItems = [
    {
    group_name: "null",
    items: [
      { href: dir_index + "index.html", text: "Home" },
    ]
  },
  {
    group_name: "Заняття",
    items: [

  { href: dir_pages + "lesson01.html", text: "Заняття 1: Вступ до Python та основи синтаксису" },
  { href: dir_pages + "lesson02.html", text: "Заняття 2: Списки" },
  { href: dir_pages + "lesson03.html", text: "Заняття 3: Робота з файлами (txt)" },
  { href: dir_pages + "lesson04.html", text: "Заняття 4: Булевий тип даних та умовні оператори (if)" },
  { href: dir_pages + "lesson05.html", text: "Заняття 5: Цикли в Python" },

  { href: dir_pages + "lesson06.html", text: "Заняття 6: Обробка помилок (Exceptions)" },
  { href: dir_pages + "lesson07.html", text: "Заняття 7: Модуль os" },
  { href: dir_pages + "lesson08.html", text: "Заняття 8: Функції в Python" },
  { href: dir_pages + "lesson09.html", text: "Заняття 9: Словники" },
  { href: dir_pages + "lesson10.html", text: "Заняття 10: Робота з JSON файлами" },

  { href: dir_pages + "lesson11.html", text: "Заняття 11: Множини" },
  { href: dir_pages + "lesson12.html", text: "Заняття 12: Робота з датами і часом (модулі datetime та time)" },
  { href: dir_pages + "lesson13.html", text: "Заняття 13: Кортежі" },
  { href: dir_pages + "lesson14.html", text: "Заняття 14: Вступ до роботи з базами даних за допомогою бібліотеки oracledb" },
  { href: dir_pages + "lesson15.html", text: "Заняття 15: Робота з базами даних за допомогою SQL Server і PostgreSQL" },

  { href: dir_pages + "lesson16.html", text: "Заняття 16: Робота з CSV файлами" },
  { href: dir_pages + "lesson17.html", text: "Заняття 17: Робота з бібліотекою openpyxl для роботи з Excel" },
  { href: dir_pages + "lesson18.html", text: "Заняття 18: Вступ до бібліотеки pandas" },
  { href: dir_pages + "lesson19.html", text: "Заняття 19: Відправка електронних листів через Outlook (pywin32)" },
  { href: dir_pages + "lesson20.html", text: "Заняття 20: Робота з SFTP за допомогою бібліотеки paramiko" },

]
  },
    {
    group_name: "Тести",
    items: [

      { href: dir_pages + "test01.html", text: "Тест 1: Основи синтаксису" },
      { href: dir_pages + "test02.html", text: "Тест 2: Списки" },
      { href: dir_pages + "test03.html", text: "Тест 3: Робота з файлами (txt)" },
      { href: dir_pages + "test04.html", text: "Тест 4: Булевий тип даних та умовні оператори (if)" },
      { href: dir_pages + "test05.html", text: "Тест 5: Цикли в Python" },

      { href: dir_pages + "test06.html", text: "Тест 6: Обробка помилок (Exceptions)" },
      { href: dir_pages + "test07.html", text: "Тест 7: Модуль os" },
      { href: dir_pages + "test08.html", text: "Тест 8: Функції в Python" },
      { href: dir_pages + "test09.html", text: "Тест 9: Словники" },
      { href: dir_pages + "test10.html", text: "Тест 10: Робота з JSON файлами" },

      { href: dir_pages + "test11.html", text: "Тест 11: Множини" },
      { href: dir_pages + "test12.html", text: "Тест 12: Робота з датами і часом (модулі datetime та time)" },
      { href: dir_pages + "test13.html", text: "Тест 13: Кортежі" },
      { href: dir_pages + "test14.html", text: "Тест 14: Вступ до роботи з базами даних за допомогою бібліотеки oracledb" },
      { href: dir_pages + "test15.html", text: "Тест 15: Робота з базами даних за допомогою SQL Server і PostgreSQL" },

      { href: dir_pages + "test16.html", text: "Тест 16: Робота з CSV файлами" },
      { href: dir_pages + "test17.html", text: "Тест 17: Робота з бібліотекою openpyxl для роботи з Excel" },
      { href: dir_pages + "test18.html", text: "Тест 18: Вступ до бібліотеки pandas" },
      { href: dir_pages + "test19.html", text: "Тест 19: Відправка електронних листів через Outlook (pywin32)" },
      { href: dir_pages + "test20.html", text: "Тест 20: Робота з SFTP за допомогою бібліотеки paramiko" },
    ]
  },
]
;

const ul = document.getElementById("nav-global");
const div = document.createElement("div");
div.className = "resizer";
ul.appendChild(div);

let activeLink = null;
const COLLAPSE_STORAGE_KEY = "navGroupCollapsed";

let collapsedState = {};
try {
  collapsedState = JSON.parse(localStorage.getItem(COLLAPSE_STORAGE_KEY)) || {};
} catch (e) {
  collapsedState = {};
}

navItems.forEach((group, groupIndex) => {
  if (group.items.length === 0) return; // skip empty sections

  // Treat missing, empty, or the literal string "null" as "no heading"
  const hasHeading = group.group_name && group.group_name !== "null";
  const groupKey = hasHeading ? group.group_name : "group-" + groupIndex;

  const groupWrap = document.createElement("div");
  groupWrap.className = "nav-group";

  let isCollapsed = !!collapsedState[groupKey];

  if (hasHeading) {
    const heading = document.createElement("h3");
    heading.className = "nav-group-title";
    heading.textContent = group.group_name;
    heading.setAttribute("role", "button");
    heading.setAttribute("tabindex", "0");
    heading.setAttribute("aria-expanded", String(!isCollapsed));

    const applyCollapsedClass = () => {
      groupWrap.classList.toggle("collapsed", isCollapsed);
      heading.classList.toggle("collapsed", isCollapsed);
      heading.setAttribute("aria-expanded", String(!isCollapsed));
    };

    applyCollapsedClass();

    const toggleCollapse = () => {
      isCollapsed = !isCollapsed;
      collapsedState[groupKey] = isCollapsed;
      localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(collapsedState));
      applyCollapsedClass();
    };

    heading.addEventListener("click", toggleCollapse);
    heading.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCollapse();
      }
    });

    ul.appendChild(heading);
  }

  group.items.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;

    if (a.href === location.href) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
      activeLink = a;
      // Always keep the group containing the active page expanded
      isCollapsed = false;
      collapsedState[groupKey] = false;
    }

    groupWrap.appendChild(a);
  });

  if (hasHeading) {
    groupWrap.classList.toggle("collapsed", isCollapsed);
  }

  ul.appendChild(groupWrap);
});

localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(collapsedState));


if (activeLink) {
  activeLink.scrollIntoView({
    behavior: "auto",     // or "smooth"
    block: "center"       // center is best UX
  });
}

(function () {
  const navLeft = document.getElementById("nav-local"); //[cite: 1]
  const navRight = document.getElementById("nav-global"); //[cite: 1]
  const content = document.getElementById("content"); //[cite: 1]
  
  // FIX 1: Don't stop if 'content' is missing, only stop if both navs are missing
  if (!navLeft && !navRight) return;

  const MIN_WIDTH = 140; //[cite: 1]
  const MAX_WIDTH = 500; //[cite: 1]
  const LEFT_STORAGE_KEY = "localNavWidth"; //[cite: 1]
  const RIGHT_STORAGE_KEY = "globalNavWidth"; //[cite: 1]

  // Restore saved widths
  if (navLeft) { //[cite: 1]
    const savedLeft = localStorage.getItem(LEFT_STORAGE_KEY); //[cite: 1]
    if (savedLeft) { //[cite: 1]
      const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, parseInt(savedLeft))); //[cite: 1]
      navLeft.style.width = width + "px"; //[cite: 1]
    } //[cite: 1]
  } //[cite: 1]

  if (navRight) { //[cite: 1]
    const savedRight = localStorage.getItem(RIGHT_STORAGE_KEY); //[cite: 1]
    if (savedRight) { //[cite: 1]
      const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, parseInt(savedRight))); //[cite: 1]
      navRight.style.width = width + "px"; //[cite: 1]
    } //[cite: 1]
  } //[cite: 1]

  // Update content padding based on both sidebars
  function updateContentPadding() { //[cite: 1]
    // FIX 1 cont: Only try to pad the content if the element actually exists
    if (!content) return; 
    
    const leftWidth = navLeft ? navLeft.offsetWidth : 0; //[cite: 1]
    const rightWidth = navRight ? navRight.offsetWidth : 0; //[cite: 1]
    content.style.paddingLeft = leftWidth + "px"; //[cite: 1]
    content.style.paddingRight = rightWidth + "px"; //[cite: 1]
  } //[cite: 1]

  updateContentPadding(); //[cite: 1]

  // Generic resizer drag function
  function makeResizable(nav, storageKey, isLeft) { //[cite: 1]
    const resizer = nav.querySelector(".resizer"); //[cite: 1]
    if (!resizer) return; //[cite: 1]

    resizer.addEventListener("mousedown", (e) => { //[cite: 1]
      e.preventDefault(); //[cite: 1]
      document.body.style.cursor = "ew-resize"; //[cite: 1]

      function onMouseMove(e) { //[cite: 1]
        let newWidth; //[cite: 1]
        if (isLeft) { //[cite: 1]
          newWidth = e.clientX; // distance from left edge //[cite: 1]
        } else { //[cite: 1]
          // FIX 2: Correct math for the right side
          newWidth = window.innerWidth - e.clientX; 
        }

        const clamped = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, newWidth)); //[cite: 1]
        nav.style.width = clamped + "px"; //[cite: 1]
        localStorage.setItem(storageKey, clamped); //[cite: 1]
        updateContentPadding(); //[cite: 1]
      } //[cite: 1]

      function onMouseUp() { //[cite: 1]
        document.body.style.cursor = ""; //[cite: 1]
        document.removeEventListener("mousemove", onMouseMove); //[cite: 1]
        document.removeEventListener("mouseup", onMouseUp); //[cite: 1]
      } //[cite: 1]

      document.addEventListener("mousemove", onMouseMove); //[cite: 1]
      document.addEventListener("mouseup", onMouseUp); //[cite: 1]
    }); //[cite: 1]
  } //[cite: 1]

  if (navLeft) makeResizable(navLeft, LEFT_STORAGE_KEY, true); //[cite: 1]
  if (navRight) makeResizable(navRight, RIGHT_STORAGE_KEY, false); //[cite: 1]

  // Update content padding on window resize
  window.addEventListener("resize", updateContentPadding); //[cite: 1]
})(); //[cite: 1]