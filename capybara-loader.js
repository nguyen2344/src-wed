const css = `
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .fullscreen-overlay {
    position: fixed;
    inset: 0;
    background-color: #f4e7d4;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .capybaraloader {
    width: 14em;
    height: 10em;
    position: relative;
    --color: rgb(204, 125, 45);
    --color2: rgb(83, 56, 28);
    transform: scale(1);
  }

  .capybara {
    width: 100%;
    height: 7.5em;
    position: relative;
    z-index: 1;
  }

  .loader {
    width: 100%;
    height: 2.5em;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .capy {
    width: 85%;
    height: 100%;
    background: linear-gradient(var(--color), 90%, var(--color2));
    border-radius: 45%;
    position: relative;
    z-index: 1;
    animation: movebody 1s linear infinite;
  }

  .capyhead {
    width: 7.5em;
    height: 7em;
    bottom: 0em;
    right: 0em;
    position: absolute;
    background-color: var(--color);
    z-index: 3;
    border-radius: 3.5em;
    box-shadow: -1em 0em var(--color2);
    animation: movebody 1s linear infinite;
  }

  .capyear {
    width: 2em;
    height: 2em;
    background: linear-gradient(-45deg, var(--color), 90%, var(--color2));
    top: 0em;
    left: 0em;
    border-radius: 100%;
    position: absolute;
    overflow: hidden;
    z-index: 3;
  }

  .capyear:nth-child(2) {
    left: 5em;
    background: linear-gradient(25deg, var(--color), 90%, var(--color2));
  }

  .capyear2 {
    width: 100%;
    height: 1em;
    background-color: var(--color2);
    bottom: 0em;
    left: 0.5em;
    border-radius: 100%;
    position: absolute;
    transform: rotate(-45deg);
  }

  .capymouth {
    width: 3.5em;
    height: 2em;
    background-color: var(--color2);
    position: absolute;
    bottom: 0em;
    left: 2.5em;
    border-radius: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .capylips {
    width: 0.25em;
    height: 0.75em;
    border-radius: 100%;
    transform: rotate(-45deg);
    background-color: var(--color);
  }

  .capylips:nth-child(2) {
    transform: rotate(45deg);
  }

  .capyeye {
    width: 2em;
    height: 0.5em;
    background-color: var(--color2);
    position: absolute;
    bottom: 3.5em;
    left: 1.5em;
    border-radius: 5em;
    transform: rotate(45deg);
  }

  .capyeye:nth-child(4) {
    transform: rotate(-45deg);
    left: 5.5em;
    width: 1.75em;
  }

  .capyleg {
    width: 6em;
    height: 5em;
    bottom: 0em;
    left: 0em;
    position: absolute;
    background: linear-gradient(var(--color), 95%, var(--color2));
    z-index: 2;
    border-radius: 2em;
    animation: movebody 1s linear infinite;
  }

  .capyleg2 {
    width: 1.75em;
    height: 3em;
    bottom: 0em;
    left: 3.25em;
    position: absolute;
    background: linear-gradient(var(--color), 80%, var(--color2));
    z-index: 2;
    border-radius: 0.75em;
    box-shadow: inset 0em -0.5em var(--color2);
    animation: moveleg 1s linear infinite;
  }

  .capyleg2:nth-child(3) {
    width: 1.25em;
    left: 0.5em;
    height: 2em;
    animation: moveleg2 1s linear infinite 0.075s;
  }

  @keyframes moveleg {
    0% { transform: rotate(-45deg) translateX(-5%); }
    50% { transform: rotate(45deg) translateX(5%); }
    100% { transform: rotate(-45deg) translateX(-5%); }
  }

  @keyframes moveleg2 {
    0% { transform: rotate(45deg); }
    50% { transform: rotate(-45deg); }
    100% { transform: rotate(45deg); }
  }

  @keyframes movebody {
    0% { transform: translateX(0%); }
    50% { transform: translateX(2%); }
    100% { transform: translateX(0%); }
  }

  .loaderline {
    width: 50em;
    height: 0.5em;
    border-top: 0.5em dashed var(--color2);
    animation: moveline 10s linear infinite;
  }

  @keyframes moveline {
    0% { transform: translateX(0%); opacity: 0%; }
    5% { opacity: 100%; }
    95% { opacity: 100%; }
    100% { opacity: 0%; transform: translateX(-70%); }
  }
`;

// Inject style
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

// Lưu nội dung cũ
const oldContent = document.body.innerHTML;

// Tạo overlay toàn màn hình
const overlay = document.createElement("div");
overlay.className = "fullscreen-overlay";

const loader = document.createElement("div");
loader.className = "capybaraloader";
loader.innerHTML = `
  <div class="capybara">
    <div class="capyhead">
      <div class="capyear"><div class="capyear2"></div></div>
      <div class="capyear"></div>
      <div class="capymouth"><div class="capylips"></div><div class="capylips"></div></div>
      <div class="capyeye"></div>
      <div class="capyeye"></div>
    </div>
    <div class="capyleg"></div>
    <div class="capyleg2"></div>
    <div class="capyleg2"></div>
    <div class="capy"></div>
  </div>
  <div class="loader"><div class="loaderline"></div></div>
`;

overlay.appendChild(loader);
document.body.innerHTML = "";
document.body.appendChild(overlay);

// Sau 10s, gỡ overlay và khôi phục nội dung
setTimeout(() => {
  document.body.innerHTML = oldContent;
}, 10000);
