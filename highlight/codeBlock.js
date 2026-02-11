let codeCounter = 0; // Counter for unique IDs

// Function to create a code block
function createCodeBlock(code, element) {
    codeCounter++;
    const id = `code-${codeCounter}`; // Generate unique ID

    const codeBlockHTML = `
        <div class="code-container">
            <button class="copy-btn" onclick="copyCode('${id}', this)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path>
                </svg>
                Copy
            </button>
            <pre><code class="python" id="${id}">${code}</code></pre>
        </div>
    `;

    element.insertAdjacentHTML("afterend", codeBlockHTML);
    hljs.highlightAll(); // Apply syntax highlighting to new block
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