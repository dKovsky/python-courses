let codeCounter = 0; // Counter for unique IDs


function hide_nav_global() {
  const nav_global_element = document.getElementById(id="nav-global")

  if (nav_global_element) {
    if (nav_global_element.style.display === 'none') {
      nav_global_element.style.display = 'block';
    } else {
      nav_global_element.style.display = 'none'; 
    }
  }
  window.dispatchEvent(new Event('resize'));

}

function hide_nav_local() {
  const nav_local_element = document.getElementById(id="nav-local")

  if (nav_local_element) {
    if (nav_local_element.style.display === 'none') {
      nav_local_element.style.display = 'block';
    } else {
      nav_local_element.style.display = 'none'; 
    }
  }
  window.dispatchEvent(new Event('resize'));

}


// Function to create a code block
function createCodeBlock(code, element) {
    codeCounter++;
    const id = `code-${codeCounter}`; // Generate unique ID

    // <button class="bookmark-btn">
    //       <svg fill="currentColor" viewBox="0 0 24 24"width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="primary" d="M12,17,5,21V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1V21Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
    // </button>

    const codeBlockHTML = `
        <div class="code-container">
            <button class="copy-btn" onclick="copyCode('${id}', this)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path>
                </svg>
                Copy
            </button>

            <button class="fullsize-btn" onclick="fullCode('${id}', this)">
            <svg fill="currentColor" viewBox="0 0 24 24"width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4H7C5.58579 4 4.87868 4 4.43934 4.43934C4 4.87868 4 5.58579 4 7V9" stroke="#222222" stroke-linecap="round"/>
        <path d="M9 20H7C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V15" stroke="#222222" stroke-linecap="round"/>
        <path d="M15 4H17C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V9" stroke="#222222" stroke-linecap="round"/>
        <path d="M15 20H17C18.4142 20 19.1213 20 19.5607 19.5607C20 19.1213 20 18.4142 20 17V15" stroke="#222222" stroke-linecap="round"/>
        </svg>
</button>

            <pre><code class="python" id="${id}">${code}</code></pre>
        </div>
    `;

    element.insertAdjacentHTML("afterend", codeBlockHTML);
    hljs.highlightAll(); // Apply syntax highlighting to new block
}



// Function to create a code block
function create_code_with_answear(code, answear, element) {
    codeCounter++;
    const id = `code-${codeCounter}`; // Generate unique ID

    // <button class="bookmark-btn">
    //       <svg fill="currentColor" viewBox="0 0 24 24"width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="primary" d="M12,17,5,21V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1V21Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
    // </button>

    const codeBlockHTML = `
    <div class="code-container">
        <div class="row_btns">
            <button class="btn_copy" onclick="copyCode('${id}', this)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z">
                    </path>
                </svg>
                Copy
            </button>

                      <button class="btn_run">
                <svg fill="currentColor" viewBox="0 0 512 512" width="16px" height="16px"
                    xmlns="http://www.w3.org/2000/svg">

                    <path
                        d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
                </svg>
            </button>


            <button class="btn_answear" onclick="show_answear('${id}', this)">
                <svg fill="currentColor" viewBox="0 0 768 768" width="16px" height="16px"
                    xmlns="http://www.w3.org/2000/svg">

                    <path
                        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"
                        fill="white" />
                </svg>
            </button>

            <button class="btn_fullsize" onclick="fullCode('${id}', this)">
                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4H7C5.58579 4 4.87868 4 4.43934 4.43934C4 4.87868 4 5.58579 4 7V9" stroke="#222222"
                        stroke-linecap="round" />
                    <path d="M9 20H7C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V15" stroke="#222222"
                        stroke-linecap="round" />
                    <path d="M15 4H17C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V9" stroke="#222222"
                        stroke-linecap="round" />
                    <path d="M15 20H17C18.4142 20 19.1213 20 19.5607 19.5607C20 19.1213 20 18.4142 20 17V15"
                        stroke="#222222" stroke-linecap="round" />
                </svg>
            </button>

            <button class="btn_3dot">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                    viewBox="0 0 52 52">
                    <path d="M20,44c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S20,47.3,20,44z M20,26c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6	S20,29.3,20,26z M20,8c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S20,11.3,20,8z" />
                </svg></button>

  </div>
        <div class="code_answear">'${answear}'</div>



        
        <pre><code class="python" id="${id}">${code}</code></pre>
    </div>
    `;

    element.insertAdjacentHTML("afterend", codeBlockHTML);
    hljs.highlightAll(); // Apply syntax highlighting to new block
}

function show_answear(id, btn) {
    const code_element = document.getElementById(id);
    var code = code_element.textContent;
    // console.log(code)

    // 1. Find the answer div inside the same container as the clicked button
    const answearDiv = btn.parentElement.parentElement.querySelector('.code_answear');

    // 2. Use textContent to read the text (works perfectly even with display: none)
    const hiddenText = answearDiv.textContent;
    // console.log("Hidden text successfully read:", hiddenText);

    code = code.replace('# YOUR CODE HERE', hiddenText.slice(1, -1));
    // console.log(code);

    code_element.textContent = code;

    // FIX: Strip the "already highlighted" protective stamp 
    code_element.removeAttribute('data-highlighted');

    // Now Highlight.js will happily color it again!
    hljs.highlightElement(code_element);


}


// Function to copy code to clipboard
function copyCode(id, btn) {
    var code = document.getElementById(id).innerText;
    var textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    btn.innerText = 'Copied!';
    setTimeout(() => {
        // Reset button text and include the SVG when it switches back to "Copy"
        btn.innerHTML = `
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path>
                </svg>
            </span>
            Copy
        `;
    }, 2000);
}

// Function to launch code block in fullscreen popup
function fullCode(id, btn) {
    // 1. Fetch the raw code text from the specific target element
    var originalCode = document.getElementById(id).innerText;

    // 2. Point to our modal target containers
    var modal = document.getElementById('codeModal');
    var modalTarget = document.getElementById('modalCodeTarget');

    // 3. Inject code text safely
    modalTarget.textContent = originalCode;

    // 4. Force HighlightJS to process syntax coloring on the modal's DOM element
    if (window.hljs) {
        // Reset element attribute tag tracking so highlightjs recalculates it fresh
        modalTarget.removeAttribute('data-highlighted');
        hljs.highlightElement(modalTarget);
    }

    // 5. Uncover the popup visually
    modal.style.display = "flex";
}

// Function to close the modal window safely
function closeFullCode() {
    document.getElementById('codeModal').style.display = "none";
}

function addAnswerToggle(sectionId, answerCode) {
    const section = document.querySelector(`[id="${sectionId}"]`);

    // createCodeBlock() inserts the .code-container as the NEXT SIBLING
    // of `section` (it uses insertAdjacentHTML("afterend", ...) on the
    // element it's given). So right after createCodeBlock() has run,
    // section.nextElementSibling IS the exercise's own code block.
    const exerciseCodeBlock = section.nextElementSibling;

    const btn = document.createElement('button');
    btn.textContent = 'Показати відповідь';
    btn.className = 'show-answer-btn';
    exerciseCodeBlock.insertAdjacentElement('afterend', btn);

    // `anchor` is just an insertion point: createCodeBlock() will insert
    // its highlighted block right after it. We remove the anchor itself
    // once we've grabbed a reference to what it created.
    const anchor = document.createElement('div');
    btn.insertAdjacentElement('afterend', anchor);

    createCodeBlock(answerCode, anchor);       // adds highlighting + copy button
    const answerContainer = anchor.nextElementSibling;
    answerContainer.style.display = 'none';
    anchor.remove();

    btn.onclick = () => {
        const hidden = answerContainer.style.display === 'none';
        answerContainer.style.display = hidden ? 'block' : 'none';
        btn.textContent = hidden ? 'Сховати відповідь' : 'Показати відповідь';
    };
}




// document.addEventListener('DOMContentLoaded', function () {
//   const codethemeSwitcher = document.getElementById('code-theme-switcher');
//   if (!codethemeSwitcher) return;

//   codethemeSwitcher.addEventListener('change', function (event) {
//       const selectedTheme = event.target.value;
//       const highlightCssLink = document.getElementById('highlight-css');

//       if (highlightCssLink) {
//           highlightCssLink.href = `C:/Users/dmytr/Desktop/snippets/snippets-python/highlight/styles/${selectedTheme}.css`;
//       } else {
//           const link = document.createElement('link');
//           link.rel = 'stylesheet';
//           link.href = `C:/Users/dmytr/Desktop/snippets/snippets-python/highlight/styles/${selectedTheme}.css`;
//           link.id = 'highlight-css';
//           document.head.appendChild(link);
//       }

//         // Function to extract and apply the background color from the computed style
//   function applyBackgroundColor() {
//     // Get the computed background color from .hljs
//     const hljsElement = document.querySelector('.hljs');
//     const computedStyle = window.getComputedStyle(hljsElement); // Get the computed style
//     const backgroundColor = computedStyle.backgroundColor; // Extract background color
//     const codeBlocks = document.querySelectorAll('pre');  // Select all code blocks

//     // Apply the background color to all code blocks (pre elements)
//     codeBlocks.forEach(block => {
//       block.style.backgroundColor = backgroundColor;
//     });
//   }

//   // Wait for the CSS to load and then apply background color
//   setTimeout(applyBackgroundColor, 500);  // Delay to ensure styles are applied
//       console.log('Loading theme:', selectedTheme);
//   });
// });

// // Function to change the theme based on the selected option
// document.addEventListener('DOMContentLoaded', function() {
// const codethemeSwitcher = document.getElementById('theme-switcher');
//     if (codethemeSwitcher) {
//       codethemeSwitcher.addEventListener('change', function (event) {
//   const selectedTheme = event.target.value;
//   document.body.className = selectedTheme;  // Change the class on body to apply the theme
// });
// } else {
//     console.log('Theme switcher not found');
// }
//   // You can add more logic here to apply modern theme or any other theme changes if needed
// });

// // Function to change the code theme based on the selected option
// document.addEventListener('DOMContentLoaded', function() {
//     const codethemeSwitcher = document.getElementById('code-theme-switcher');
//     if (codethemeSwitcher) {
//       codethemeSwitcher.addEventListener('change', function (event) {
//   const selectedTheme = event.target.value;
//   const highlightCssLink = document.getElementById('highlight-css');
//   const codeBlocks = document.querySelectorAll('pre');  // Select all code blocks

//   // Function to load CSS dynamically
//   function loadCSS(theme) {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = `C:/Users/dmytr/Desktop/snippets/snippets-python/highlight/styles/${theme}.css`;
//     link.id = 'highlight-css'; // Assigning an ID for easy reference
//     document.head.appendChild(link);
//     console.log('Loading theme:', theme);
//   }
//   // Change the CSS file based on the selected theme
//   if (selectedTheme === 'atom-one-dark') {
//     loadCSS('atom-one-dark');
//   } else if (selectedTheme === '1c-light') {
//     loadCSS('1c-light');

//   } else if (selectedTheme === '1c-light.min') {
//     loadCSS('1c-light.min');

//   } else if (selectedTheme === 'a11y-dark') {
//     loadCSS('a11y-dark');

//   } else if (selectedTheme === 'a11y-dark.min') {
//     loadCSS('a11y-dark.min');

//   } else if (selectedTheme === 'a11y-light') {
//     loadCSS('a11y-light');

//   } else if (selectedTheme === 'a11y-light.min') {
//     loadCSS('a11y-light.min');

//   } else if (selectedTheme === 'agate') {
//     loadCSS('agate');

//   } else if (selectedTheme === 'agate.min') {
//     loadCSS('agate.min');

//   } else if (selectedTheme === 'an-old-hope') {
//     loadCSS('an-old-hope');

//   } else if (selectedTheme === 'an-old-hope.min') {
//     loadCSS('an-old-hope.min');

//   } else if (selectedTheme === 'androidstudio') {
//     loadCSS('androidstudio');

//   } else if (selectedTheme === 'androidstudio.min') {
//     loadCSS('androidstudio.min');

//   } else if (selectedTheme === 'arduino-light') {
//     loadCSS('arduino-light');

//   } else if (selectedTheme === 'arduino-light.min') {
//     loadCSS('arduino-light.min');

//   } else if (selectedTheme === 'arta') {
//     loadCSS('arta');

//   } else if (selectedTheme === 'arta.min') {
//     loadCSS('arta.min');

//   } else if (selectedTheme === 'ascetic') {
//     loadCSS('ascetic');

//   } else if (selectedTheme === 'ascetic.min') {
//     loadCSS('ascetic.min');

//   } else if (selectedTheme === 'atom-one-dark-reasonable') {
//     loadCSS('atom-one-dark-reasonable');

//   } else if (selectedTheme === 'atom-one-dark-reasonable.min') {
//     loadCSS('atom-one-dark-reasonable.min');

//   } else if (selectedTheme === 'atom-one-dark.min') {
//     loadCSS('atom-one-dark.min');

//   } else if (selectedTheme === 'atom-one-light') {
//     loadCSS('atom-one-light');

//   } else if (selectedTheme === 'atom-one-light.min') {
//     loadCSS('atom-one-light.min');

//   } else if (selectedTheme === 'brown-paper') {
//     loadCSS('brown-paper');

//   } else if (selectedTheme === 'brown-paper.min') {
//     loadCSS('brown-paper.min');

//   } else if (selectedTheme === 'codepen-embed') {
//     loadCSS('codepen-embed');

//   } else if (selectedTheme === 'codepen-embed.min') {
//     loadCSS('codepen-embed.min');

//   } else if (selectedTheme === 'color-brewer') {
//     loadCSS('color-brewer');

//   } else if (selectedTheme === 'color-brewer.min') {
//     loadCSS('color-brewer.min');

//   } else if (selectedTheme === 'dark') {
//     loadCSS('dark');

//   } else if (selectedTheme === 'dark.min') {
//     loadCSS('dark.min');

//   } else if (selectedTheme === 'default') {
//     loadCSS('default');

//   } else if (selectedTheme === 'default.min') {
//     loadCSS('default.min');

//   } else if (selectedTheme === 'devibeans') {
//     loadCSS('devibeans');

//   } else if (selectedTheme === 'devibeans.min') {
//     loadCSS('devibeans.min');

//   } else if (selectedTheme === 'docco') {
//     loadCSS('docco');

//   } else if (selectedTheme === 'docco.min') {
//     loadCSS('docco.min');

//   } else if (selectedTheme === 'far') {
//     loadCSS('far');

//   } else if (selectedTheme === 'far.min') {
//     loadCSS('far.min');

//   } else if (selectedTheme === 'felipec') {
//     loadCSS('felipec');

//   } else if (selectedTheme === 'felipec.min') {
//     loadCSS('felipec.min');

//   } else if (selectedTheme === 'foundation') {
//     loadCSS('foundation');

//   } else if (selectedTheme === 'foundation.min') {
//     loadCSS('foundation.min');

//   } else if (selectedTheme === 'github-dark-dimmed') {
//     loadCSS('github-dark-dimmed');

//   } else if (selectedTheme === 'github-dark-dimmed.min') {
//     loadCSS('github-dark-dimmed.min');

//   } else if (selectedTheme === 'github-dark') {
//     loadCSS('github-dark');

//   } else if (selectedTheme === 'github-dark.min') {
//     loadCSS('github-dark.min');

//   } else if (selectedTheme === 'github') {
//     loadCSS('github');

//   } else if (selectedTheme === 'github.min') {
//     loadCSS('github.min');

//   } else if (selectedTheme === 'gml') {
//     loadCSS('gml');

//   } else if (selectedTheme === 'gml.min') {
//     loadCSS('gml.min');

//   } else if (selectedTheme === 'googlecode') {
//     loadCSS('googlecode');

//   } else if (selectedTheme === 'googlecode.min') {
//     loadCSS('googlecode.min');

//   } else if (selectedTheme === 'gradient-dark') {
//     loadCSS('gradient-dark');

//   } else if (selectedTheme === 'gradient-dark.min') {
//     loadCSS('gradient-dark.min');

//   } else if (selectedTheme === 'gradient-light') {
//     loadCSS('gradient-light');

//   } else if (selectedTheme === 'gradient-light.min') {
//     loadCSS('gradient-light.min');

//   } else if (selectedTheme === 'grayscale') {
//     loadCSS('grayscale');

//   } else if (selectedTheme === 'grayscale.min') {
//     loadCSS('grayscale.min');

//   } else if (selectedTheme === 'hybrid') {
//     loadCSS('hybrid');

//   } else if (selectedTheme === 'hybrid.min') {
//     loadCSS('hybrid.min');

//   } else if (selectedTheme === 'idea') {
//     loadCSS('idea');

//   } else if (selectedTheme === 'idea.min') {
//     loadCSS('idea.min');

//   } else if (selectedTheme === 'intellij-light') {
//     loadCSS('intellij-light');

//   } else if (selectedTheme === 'intellij-light.min') {
//     loadCSS('intellij-light.min');

//   } else if (selectedTheme === 'ir-black') {
//     loadCSS('ir-black');

//   } else if (selectedTheme === 'ir-black.min') {
//     loadCSS('ir-black.min');

//   } else if (selectedTheme === 'isbl-editor-dark') {
//     loadCSS('isbl-editor-dark');

//   } else if (selectedTheme === 'isbl-editor-dark.min') {
//     loadCSS('isbl-editor-dark.min');

//   } else if (selectedTheme === 'isbl-editor-light') {
//     loadCSS('isbl-editor-light');

//   } else if (selectedTheme === 'isbl-editor-light.min') {
//     loadCSS('isbl-editor-light.min');

//   } else if (selectedTheme === 'kimbie-dark') {
//     loadCSS('kimbie-dark');

//   } else if (selectedTheme === 'kimbie-dark.min') {
//     loadCSS('kimbie-dark.min');

//   } else if (selectedTheme === 'kimbie-light') {
//     loadCSS('kimbie-light');

//   } else if (selectedTheme === 'kimbie-light.min') {
//     loadCSS('kimbie-light.min');

//   } else if (selectedTheme === 'lightfair') {
//     loadCSS('lightfair');

//   } else if (selectedTheme === 'lightfair.min') {
//     loadCSS('lightfair.min');

//   } else if (selectedTheme === 'lioshi') {
//     loadCSS('lioshi');

//   } else if (selectedTheme === 'lioshi.min') {
//     loadCSS('lioshi.min');

//   } else if (selectedTheme === 'magula') {
//     loadCSS('magula');

//   } else if (selectedTheme === 'magula.min') {
//     loadCSS('magula.min');

//   } else if (selectedTheme === 'mono-blue') {
//     loadCSS('mono-blue');

//   } else if (selectedTheme === 'mono-blue.min') {
//     loadCSS('mono-blue.min');

//   } else if (selectedTheme === 'monokai-sublime') {
//     loadCSS('monokai-sublime');

//   } else if (selectedTheme === 'monokai-sublime.min') {
//     loadCSS('monokai-sublime.min');

//   } else if (selectedTheme === 'monokai') {
//     loadCSS('monokai');

//   } else if (selectedTheme === 'monokai.min') {
//     loadCSS('monokai.min');

//   } else if (selectedTheme === 'night-owl') {
//     loadCSS('night-owl');

//   } else if (selectedTheme === 'night-owl.min') {
//     loadCSS('night-owl.min');

//   } else if (selectedTheme === 'nnfx-dark') {
//     loadCSS('nnfx-dark');

//   } else if (selectedTheme === 'nnfx-dark.min') {
//     loadCSS('nnfx-dark.min');

//   } else if (selectedTheme === 'nnfx-light') {
//     loadCSS('nnfx-light');

//   } else if (selectedTheme === 'nnfx-light.min') {
//     loadCSS('nnfx-light.min');

//   } else if (selectedTheme === 'nord') {
//     loadCSS('nord');

//   } else if (selectedTheme === 'nord.min') {
//     loadCSS('nord.min');

//   } else if (selectedTheme === 'obsidian') {
//     loadCSS('obsidian');

//   } else if (selectedTheme === 'obsidian.min') {
//     loadCSS('obsidian.min');

//   } else if (selectedTheme === 'panda-syntax-dark') {
//     loadCSS('panda-syntax-dark');

//   } else if (selectedTheme === 'panda-syntax-dark.min') {
//     loadCSS('panda-syntax-dark.min');

//   } else if (selectedTheme === 'panda-syntax-light') {
//     loadCSS('panda-syntax-light');

//   } else if (selectedTheme === 'panda-syntax-light.min') {
//     loadCSS('panda-syntax-light.min');

//   } else if (selectedTheme === 'paraiso-dark') {
//     loadCSS('paraiso-dark');

//   } else if (selectedTheme === 'paraiso-dark.min') {
//     loadCSS('paraiso-dark.min');

//   } else if (selectedTheme === 'paraiso-light') {
//     loadCSS('paraiso-light');

//   } else if (selectedTheme === 'paraiso-light.min') {
//     loadCSS('paraiso-light.min');

//   } else if (selectedTheme === 'pojoaque') {
//     loadCSS('pojoaque');

//   } else if (selectedTheme === 'pojoaque.min') {
//     loadCSS('pojoaque.min');

//   } else if (selectedTheme === 'purebasic') {
//     loadCSS('purebasic');

//   } else if (selectedTheme === 'purebasic.min') {
//     loadCSS('purebasic.min');

//   } else if (selectedTheme === 'qtcreator-dark') {
//     loadCSS('qtcreator-dark');

//   } else if (selectedTheme === 'qtcreator-dark.min') {
//     loadCSS('qtcreator-dark.min');

//   } else if (selectedTheme === 'qtcreator-light') {
//     loadCSS('qtcreator-light');

//   } else if (selectedTheme === 'qtcreator-light.min') {
//     loadCSS('qtcreator-light.min');

//   } else if (selectedTheme === 'rainbow') {
//     loadCSS('rainbow');

//   } else if (selectedTheme === 'rainbow.min') {
//     loadCSS('rainbow.min');

//   } else if (selectedTheme === 'routeros') {
//     loadCSS('routeros');

//   } else if (selectedTheme === 'routeros.min') {
//     loadCSS('routeros.min');

//   } else if (selectedTheme === 'school-book') {
//     loadCSS('school-book');

//   } else if (selectedTheme === 'school-book.min') {
//     loadCSS('school-book.min');

//   } else if (selectedTheme === 'shades-of-purple') {
//     loadCSS('shades-of-purple');

//   } else if (selectedTheme === 'shades-of-purple.min') {
//     loadCSS('shades-of-purple.min');

//   } else if (selectedTheme === 'srcery') {
//     loadCSS('srcery');

//   } else if (selectedTheme === 'srcery.min') {
//     loadCSS('srcery.min');

//   } else if (selectedTheme === 'stackoverflow-dark') {
//     loadCSS('stackoverflow-dark');

//   } else if (selectedTheme === 'stackoverflow-dark.min') {
//     loadCSS('stackoverflow-dark.min');

//   } else if (selectedTheme === 'stackoverflow-light') {
//     loadCSS('stackoverflow-light');

//   } else if (selectedTheme === 'stackoverflow-light.min') {
//     loadCSS('stackoverflow-light.min');

//   } else if (selectedTheme === 'sunburst') {
//     loadCSS('sunburst');

//   } else if (selectedTheme === 'sunburst.min') {
//     loadCSS('sunburst.min');

//   } else if (selectedTheme === 'tokyo-night-dark') {
//     loadCSS('tokyo-night-dark');

//   } else if (selectedTheme === 'tokyo-night-dark.min') {
//     loadCSS('tokyo-night-dark.min');

//   } else if (selectedTheme === 'tokyo-night-light') {
//     loadCSS('tokyo-night-light');

//   } else if (selectedTheme === 'tokyo-night-light.min') {
//     loadCSS('tokyo-night-light.min');

//   } else if (selectedTheme === 'tomorrow-night-blue') {
//     loadCSS('tomorrow-night-blue');

//   } else if (selectedTheme === 'tomorrow-night-blue.min') {
//     loadCSS('tomorrow-night-blue.min');

//   } else if (selectedTheme === 'tomorrow-night-bright') {
//     loadCSS('tomorrow-night-bright');

//   } else if (selectedTheme === 'tomorrow-night-bright.min') {
//     loadCSS('tomorrow-night-bright.min');

//   } else if (selectedTheme === 'vs') {
//     loadCSS('vs');

//   } else if (selectedTheme === 'vs.min') {
//     loadCSS('vs.min');

//   } else if (selectedTheme === 'vs2015') {
//     loadCSS('vs2015');

//   } else if (selectedTheme === 'vs2015.min') {
//     loadCSS('vs2015.min');

//   } else if (selectedTheme === 'xcode') {
//     loadCSS('xcode');

//   } else if (selectedTheme === 'xcode.min') {
//     loadCSS('xcode.min');

//   } else if (selectedTheme === 'xt256') {
//     loadCSS('xt256');

//   } else if (selectedTheme === 'xt256.min') {
//     loadCSS('xt256.min');
//   }


//   // Function to extract and apply the background color from the computed style
//   function applyBackgroundColor() {
//     // Get the computed background color from .hljs
//     const hljsElement = document.querySelector('.hljs');
//     const computedStyle = window.getComputedStyle(hljsElement); // Get the computed style
//     const backgroundColor = computedStyle.backgroundColor; // Extract background color

//     // Apply the background color to all code blocks (pre elements)
//     codeBlocks.forEach(block => {
//       block.style.backgroundColor = backgroundColor;
//     });
//   }

//   // Wait for the CSS to load and then apply background color
//   setTimeout(applyBackgroundColor, 500);  // Delay to ensure styles are applied
// });
// } else {
//     console.log('Code theme switcher not found');
// }
// });