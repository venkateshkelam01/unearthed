// client/public/scripts/header.js
const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const left = document.createElement("div");
left.className = "header-left";

const logo = document.createElement("img");
logo.src = "/public/logo.png"; 
logo.alt = "UnEarthed logo";
logo.width = 40;
logo.height = 40;

const title = document.createElement("h1");
title.textContent = "UnEarthed";

left.append(logo, title);

const right = document.createElement("div");
right.className = "header-right";

const btn = document.createElement("button");
btn.textContent = "Home";
btn.addEventListener("click", () => (window.location = "/"));
right.appendChild(btn);

headerContainer.append(left, right);
header.appendChild(headerContainer);
