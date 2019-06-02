// Setup highlight.js to highlight code blocks matching "code.highlight"
// hljs usually only highlights code wrapped inside <pre><code></code></pre>
document.querySelectorAll("code.highlight")
  .forEach(block => {
    block.textContent = block.textContent.trim();
    hljs.highlightBlock(block);
  });

// Under a certain viewport width we need to be able to hide the nav
// links. When they're hidden, a button for toggling them is put there.
document.querySelector("#navtoggle")
  .addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("toggled");
  });
