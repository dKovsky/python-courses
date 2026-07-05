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
  const navLeft = document.getElementById("nav-local");
  const navRight = document.getElementById("nav-global");
  const content = document.getElementById("content");
  if (!content || (!navLeft && !navRight)) return;

  const MIN_WIDTH = 140;
  const MAX_WIDTH = 500;
  const LEFT_STORAGE_KEY = "localNavWidth";
  const RIGHT_STORAGE_KEY = "globalNavWidth";

  // Restore saved widths
  if (navLeft) {
    const savedLeft = localStorage.getItem(LEFT_STORAGE_KEY);
    if (savedLeft) {
      const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, parseInt(savedLeft)));
      navLeft.style.width = width + "px";
    }
  }

  if (navRight) {
    const savedRight = localStorage.getItem(RIGHT_STORAGE_KEY);
    if (savedRight) {
      const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, parseInt(savedRight)));
      navRight.style.width = width + "px";
    }
  }

  // Update content padding based on both sidebars
  function updateContentPadding() {
    const leftWidth = navLeft ? navLeft.offsetWidth : 0;
    const rightWidth = navRight ? navRight.offsetWidth : 0;
    content.style.paddingLeft = leftWidth + "px";
    content.style.paddingRight = rightWidth + "px";
  }

  updateContentPadding();

  // Generic resizer drag function
  function makeResizable(nav, storageKey, isLeft) {
    const resizer = nav.querySelector(".resizer");
    if (!resizer) return;

    resizer.addEventListener("mousedown", (e) => {
      e.preventDefault();
      document.body.style.cursor = "ew-resize";

      function onMouseMove(e) {
        let newWidth;
        if (isLeft) {
          newWidth = e.clientX; // distance from left edge
        } else {
          const leftWidth = navLeft ? navLeft.offsetWidth : 0;
          newWidth = window.innerWidth - e.clientX - leftWidth; // distance from right edge
        }

        const clamped = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, newWidth));
        nav.style.width = clamped + "px";
        localStorage.setItem(storageKey, clamped);
        updateContentPadding();
      }

      function onMouseUp() {
        document.body.style.cursor = "";
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  }

  if (navLeft) makeResizable(navLeft, LEFT_STORAGE_KEY, true);
  if (navRight) makeResizable(navRight, RIGHT_STORAGE_KEY, false);

  // Update content padding on window resize
  window.addEventListener("resize", updateContentPadding);
})();
