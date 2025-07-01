// 1. Tạo toàn bộ HTML
document.body.innerHTML = `
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
    }
    .btn {
      height: 4em;
      width: 12em;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      pointer-events: none;
      position: relative;
      transition: opacity 1s ease, transform 1s ease;
    }
    .wrapper {
      height: 2em;
      width: 8em;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .flower {
      display: grid;
      grid-template-columns: 1em 1em;
      position: absolute;
      transition: grid-template-columns 0.8s ease;
    }
    .flower1 { top: -90px; left: -90px; transform: rotate(5deg); }
    .flower2 { bottom: 90px; left: 50px; transform: rotate(35deg); }
    .flower3 { bottom: -90px; left: -90px; transform: rotate(0deg); }
    .flower4 { top: -90px; right: 50px; transform: rotate(15deg); }
    .flower5 { right: -90px; top: -20px; transform: rotate(25deg); }
    .flower6 { right: 40px; bottom: -55px; transform: rotate(30deg); }

    .petal {
      height: 1em;
      width: 1em;
      border-radius: 40% 70% / 7% 90%;
      background: linear-gradient(#07a6d7, #93e0ee);
      border: 0.5px solid #96d1ec;
      transition: width 0.8s ease, height 0.8s ease;
    }

    .two   { transform: rotate(90deg); }
    .three { transform: rotate(270deg); }
    .four  { transform: rotate(180deg); }

    .grow .flower {
      grid-template-columns: 3em 3em;
    }

    .grow .petal {
      width: 3em;
      height: 3em;
      background: linear-gradient(#0761d7, #93bdee);
      border: 0.5px solid #96b4ec;
    }

    .grow .flower1 { animation: 15s linear infinite flower1; }
    @keyframes flower1 { 0% { transform: rotate(5deg); } 100% { transform: rotate(365deg); } }

    .grow .flower2 { animation: 13s linear infinite flower2; }
    @keyframes flower2 { 0% { transform: rotate(35deg); } 100% { transform: rotate(-325deg); } }

    .grow .flower3 { animation: 16s linear infinite flower3; }
    @keyframes flower3 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    .grow .flower4 { animation: 17s linear infinite flower4; }
    @keyframes flower4 { 0% { transform: rotate(15deg); } 100% { transform: rotate(375deg); } }

    .grow .flower5 { animation: 20s linear infinite flower5; }
    @keyframes flower5 { 0% { transform: rotate(25deg); } 100% { transform: rotate(-335deg); } }

    .grow .flower6 { animation: 20s linear infinite flower6; }
    @keyframes flower6 { 0% { transform: rotate(30deg); } 100% { transform: rotate(390deg); } }

    .hide {
      opacity: 0;
      transform: scale(0.1);
    }
  </style>

  <button class="btn" id="btn">
    <div class="wrapper">
      ${[1, 2, 3, 4, 5, 6].map(i => `
        <div class="flower flower${i}">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>`).join('')}
    </div>
  </button>
`;

// 2. Hiệu ứng nở hoa + biến mất
const btn = document.getElementById("btn");

// Nở sau 0.1s
setTimeout(() => {
  btn.classList.add("grow");
}, 100);

// Biến mất sau 5s
setTimeout(() => {
  btn.classList.add("hide");
}, 5100);
