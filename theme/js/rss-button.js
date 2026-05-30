document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector("#mdbook-menu-bar .right-buttons");
  if (!menuBar) return;

  const rssLink = Object.assign(document.createElement("a"), {
    href: "https://observeroftime.github.io/malspam-analysis/rss.xml",
    title: "RSS feed",
    ariaLabel: "RSS feed"
  });

  rssLink.innerHTML = `
    <span class="fa-svg" id="rss-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--!Font Awesome Free v6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
        <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
      </svg>
    </span>
  `;

  menuBar.appendChild(rssLink);
});
