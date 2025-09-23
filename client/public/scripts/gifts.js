// client/public/scripts/gifts.js
const renderGifts = async () => {
    const res = await fetch("/gifts");
    const data = await res.json();

    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    if (!data || data.length === 0) {
        const h2 = document.createElement("h2");
        h2.textContent = "No Gifts Available 😞";
        mainContent.appendChild(h2);
        return;
    }

    data.map((gift) => {
        const card = document.createElement("div");
        card.className = "card";

        const top = document.createElement("div");
        top.className = "top-container";
        top.style.backgroundImage = `url(${gift.image})`;

        const bottom = document.createElement("div");
        bottom.className = "bottom-container";

        const h3 = document.createElement("h3");
        h3.textContent = gift.name;

        const pPrice = document.createElement("p");
        pPrice.textContent = gift.pricePoint;

        const pAudience = document.createElement("p");
        pAudience.textContent = gift.audience;

        const link = document.createElement("a");
        link.textContent = "Read More >";
        link.href = `/gifts/${gift.id}`;
        link.setAttribute("role", "button");

        bottom.append(h3, pPrice, pAudience, link);
        card.append(top, bottom);
        mainContent.appendChild(card);
    });
};

// 404 gating will come later; for now just render:
renderGifts();
