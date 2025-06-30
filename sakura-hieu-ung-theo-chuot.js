// sakura.js
document.addEventListener("mousemove", (e) => {
    const sakura = document.createElement("span");
    sakura.className = "sakura";
    sakura.textContent = "🌸";
    sakura.style.left = e.clientX + "px";
    sakura.style.top = e.clientY + "px";
    document.body.appendChild(sakura);
    setTimeout(() => sakura.remove(), 2000);
  });
  
  // Tạo CSS động nếu chưa có
  if (!document.getElementById("sakura-style")) {
    const style = document.createElement("style");
    style.id = "sakura-style";
    style.textContent = `
      .sakura {
        position: absolute;
        font-size: 24px;
        animation: floatUp 2s ease-out forwards;
        pointer-events: none;
        user-select: none;
      }
      @keyframes floatUp {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1) rotate(0deg);
        }
        100% {
          opacity: 0;
          transform: translateY(-100px) scale(0.7) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  }
  