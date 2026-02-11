// The entire HTML block as a string
const themeHTML = `
<!-- CSS Switcher -->
  <label for="theme-switcher">Theme:</label>
  <select id="theme-switcher">
    <option value="dark">Dark</option>
    <option value="light">Light</option>
    <option value="warm">Warm</option>
    <option value="cold">Cold</option>
  </select>

  <!-- Code Theme Switcher -->
  <label for="code-theme-switcher">Code theme:</label>
  <select id="code-theme-switcher">
    <option value="atom-one-dark">Atom One Dark</option>
    <option value="1c-light">1C Light</option>
    <option value="1c-light.min">1C Light.Min</option>
    <option value="a11y-dark">A11Y Dark</option>
    <option value="a11y-dark.min">A11Y Dark.Min</option>
    <option value="a11y-light">A11Y Light</option>
    <option value="a11y-light.min">A11Y Light.Min</option>
    <option value="agate">Agate</option>
    <option value="agate.min">Agate.Min</option>
    <option value="an-old-hope">An Old Hope</option>
    <option value="an-old-hope.min">An Old Hope.Min</option>
    <option value="androidstudio">Androidstudio</option>
    <option value="androidstudio.min">Androidstudio.Min</option>
    <option value="arduino-light">Arduino Light</option>
    <option value="arduino-light.min">Arduino Light.Min</option>
    <option value="arta">Arta</option>
    <option value="arta.min">Arta.Min</option>
    <option value="ascetic">Ascetic</option>
    <option value="ascetic.min">Ascetic.Min</option>
    <option value="atom-one-dark-reasonable">Atom One Dark Reasonable</option>
    <option value="atom-one-dark-reasonable.min">Atom One Dark Reasonable.Min</option>
    <option value="atom-one-dark.min">Atom One Dark.Min</option>
    <option value="atom-one-light">Atom One Light</option>
    <option value="atom-one-light.min">Atom One Light.Min</option>
    <option value="brown-paper">Brown Paper</option>
    <option value="brown-paper.min">Brown Paper.Min</option>
    <option value="codepen-embed">Codepen Embed</option>
    <option value="codepen-embed.min">Codepen Embed.Min</option>
    <option value="color-brewer">Color Brewer</option>
    <option value="color-brewer.min">Color Brewer.Min</option>
    <option value="dark">Dark</option>
    <option value="dark.min">Dark.Min</option>
    <option value="default.min">Default.Min</option>
    <option value="devibeans">Devibeans</option>
    <option value="devibeans.min">Devibeans.Min</option>
    <option value="docco">Docco</option>
    <option value="docco.min">Docco.Min</option>
    <option value="far">Far</option>
    <option value="far.min">Far.Min</option>
    <option value="felipec">Felipec</option>
    <option value="felipec.min">Felipec.Min</option>
    <option value="foundation">Foundation</option>
    <option value="foundation.min">Foundation.Min</option>
    <option value="github-dark-dimmed">Github Dark Dimmed</option>
    <option value="github-dark-dimmed.min">Github Dark Dimmed.Min</option>
    <option value="github-dark">Github Dark</option>
    <option value="github-dark.min">Github Dark.Min</option>
    <option value="github">Github</option>
    <option value="github.min">Github.Min</option>
    <option value="gml">Gml</option>
    <option value="gml.min">Gml.Min</option>
    <option value="googlecode">Googlecode</option>
    <option value="googlecode.min">Googlecode.Min</option>
    <option value="gradient-dark">Gradient Dark</option>
    <option value="gradient-dark.min">Gradient Dark.Min</option>
    <option value="gradient-light">Gradient Light</option>
    <option value="gradient-light.min">Gradient Light.Min</option>
    <option value="grayscale">Grayscale</option>
    <option value="grayscale.min">Grayscale.Min</option>
    <option value="hybrid">Hybrid</option>
    <option value="hybrid.min">Hybrid.Min</option>
    <option value="idea">Idea</option>
    <option value="idea.min">Idea.Min</option>
    <option value="intellij-light">Intellij Light</option>
    <option value="intellij-light.min">Intellij Light.Min</option>
    <option value="ir-black">Ir Black</option>
    <option value="ir-black.min">Ir Black.Min</option>
    <option value="isbl-editor-dark">Isbl Editor Dark</option>
    <option value="isbl-editor-dark.min">Isbl Editor Dark.Min</option>
    <option value="isbl-editor-light">Isbl Editor Light</option>
    <option value="isbl-editor-light.min">Isbl Editor Light.Min</option>
    <option value="kimbie-dark">Kimbie Dark</option>
    <option value="kimbie-dark.min">Kimbie Dark.Min</option>
    <option value="kimbie-light">Kimbie Light</option>
    <option value="kimbie-light.min">Kimbie Light.Min</option>
    <option value="lightfair">Lightfair</option>
    <option value="lightfair.min">Lightfair.Min</option>
    <option value="lioshi">Lioshi</option>
    <option value="lioshi.min">Lioshi.Min</option>
    <option value="magula">Magula</option>
    <option value="magula.min">Magula.Min</option>
    <option value="mono-blue">Mono Blue</option>
    <option value="mono-blue.min">Mono Blue.Min</option>
    <option value="monokai-sublime">Monokai Sublime</option>
    <option value="monokai-sublime.min">Monokai Sublime.Min</option>
    <option value="monokai">Monokai</option>
    <option value="monokai.min">Monokai.Min</option>
    <option value="night-owl">Night Owl</option>
    <option value="night-owl.min">Night Owl.Min</option>
    <option value="nnfx-dark">Nnfx Dark</option>
    <option value="nnfx-dark.min">Nnfx Dark.Min</option>
    <option value="nnfx-light">Nnfx Light</option>
    <option value="nnfx-light.min">Nnfx Light.Min</option>
    <option value="nord">Nord</option>
    <option value="nord.min">Nord.Min</option>
    <option value="obsidian">Obsidian</option>
    <option value="obsidian.min">Obsidian.Min</option>
    <option value="panda-syntax-dark">Panda Syntax Dark</option>
    <option value="panda-syntax-dark.min">Panda Syntax Dark.Min</option>
    <option value="panda-syntax-light">Panda Syntax Light</option>
    <option value="panda-syntax-light.min">Panda Syntax Light.Min</option>
    <option value="paraiso-dark">Paraiso Dark</option>
    <option value="paraiso-dark.min">Paraiso Dark.Min</option>
    <option value="paraiso-light">Paraiso Light</option>
    <option value="paraiso-light.min">Paraiso Light.Min</option>
    <option value="pojoaque">Pojoaque</option>
    <option value="pojoaque.min">Pojoaque.Min</option>
    <option value="purebasic">Purebasic</option>
    <option value="purebasic.min">Purebasic.Min</option>
    <option value="qtcreator-dark">Qtcreator Dark</option>
    <option value="qtcreator-dark.min">Qtcreator Dark.Min</option>
    <option value="qtcreator-light">Qtcreator Light</option>
    <option value="qtcreator-light.min">Qtcreator Light.Min</option>
    <option value="rainbow">Rainbow</option>
    <option value="rainbow.min">Rainbow.Min</option>
    <option value="routeros">Routeros</option>
    <option value="routeros.min">Routeros.Min</option>
    <option value="school-book">School Book</option>
    <option value="school-book.min">School Book.Min</option>
    <option value="shades-of-purple">Shades Of Purple</option>
    <option value="shades-of-purple.min">Shades Of Purple.Min</option>
    <option value="srcery">Srcery</option>
    <option value="srcery.min">Srcery.Min</option>
    <option value="stackoverflow-dark">Stackoverflow Dark</option>
    <option value="stackoverflow-dark.min">Stackoverflow Dark.Min</option>
    <option value="stackoverflow-light">Stackoverflow Light</option>
    <option value="stackoverflow-light.min">Stackoverflow Light.Min</option>
    <option value="sunburst">Sunburst</option>
    <option value="sunburst.min">Sunburst.Min</option>
    <option value="tokyo-night-dark">Tokyo Night Dark</option>
    <option value="tokyo-night-dark.min">Tokyo Night Dark.Min</option>
    <option value="tokyo-night-light">Tokyo Night Light</option>
    <option value="tokyo-night-light.min">Tokyo Night Light.Min</option>
    <option value="tomorrow-night-blue">Tomorrow Night Blue</option>
    <option value="tomorrow-night-blue.min">Tomorrow Night Blue.Min</option>
    <option value="tomorrow-night-bright">Tomorrow Night Bright</option>
    <option value="tomorrow-night-bright.min">Tomorrow Night Bright.Min</option>
    <option value="vs">Vs</option>
    <option value="vs.min">Vs.Min</option>
    <option value="vs2015">Vs2015</option>
    <option value="vs2015.min">Vs2015.Min</option>
    <option value="xcode">Xcode</option>
    <option value="xcode.min">Xcode.Min</option>
    <option value="xt256">Xt256</option>
    <option value="xt256.min">Xt256.Min</option>
  </select>
`;


// Inject into a container in HTML
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('theme-container');
  if (!container) return;

  container.innerHTML = themeHTML;

  const themeSelect = document.getElementById('theme-switcher');
  const codeSelect = document.getElementById('code-theme-switcher');
  const dir_themes = window.location.href.split('/').pop() === "index.html" ? "" : "../";

  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedCodeTheme = localStorage.getItem('codeTheme') || 'atom-one-dark';

  document.body.className = savedTheme;

  // Delay to ensure Firefox parses select
  setTimeout(() => {
    if (themeSelect) themeSelect.value = savedTheme;
    if (codeSelect) codeSelect.value = savedCodeTheme;
  }, 0);

  let highlightLink = document.getElementById('highlight-css');
  if (!highlightLink) {
    highlightLink = document.createElement('link');
    highlightLink.rel = 'stylesheet';
    highlightLink.id = 'highlight-css';
    document.head.appendChild(highlightLink);
  }

  highlightLink.href = dir_themes + `highlight/styles/${savedCodeTheme}.css?v=${Date.now()}`;

  themeSelect?.addEventListener('change', (e) => {
    const val = e.target.value;
    document.body.className = val;
    localStorage.setItem('theme', val);
  });

  codeSelect?.addEventListener('change', (e) => {
    const val = e.target.value;
    highlightLink.href = dir_themes + `highlight/styles/${val}.css?v=${Date.now()}`;
    localStorage.setItem('codeTheme', val);

    setTimeout(() => {
      const hljsElement = document.querySelector('.hljs');
      if (!hljsElement) return;
      const bg = window.getComputedStyle(hljsElement).backgroundColor;
      document.querySelectorAll('pre').forEach(pre => pre.style.backgroundColor = bg);
    }, 500);
  });

  // Apply background for existing code blocks
  setTimeout(() => {
    const hljsElement = document.querySelector('.hljs');
    if (!hljsElement) return;
    const bg = window.getComputedStyle(hljsElement).backgroundColor;
    document.querySelectorAll('pre').forEach(pre => pre.style.backgroundColor = bg);
  }, 500);
});
