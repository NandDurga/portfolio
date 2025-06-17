const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const navlinksList = document.querySelector('.navlinks-list');

const linkone = document.querySelector('#linkone');
const linktwo = document.querySelector('#linktwo');
const linkthree = document.querySelector('#linkthree');
const linkfour = document.querySelector('#linkfour');
const linkfive = document.querySelector('#linkfive');
const linksix = document.querySelector('#linksix');

hamburger.addEventListener('click', () => {
    navlinksList.style.display = "flex";
    hamburger.style.display = "none";
    closeMenu.style.display = "flex";
})

closeMenu.addEventListener('click', () => {
    navlinksList.style.display = "none";
    closeMenu.style.display = "none";
    hamburger.style.display = "flex";
})

linkone.addEventListener('click', () => {
    linkone.style.borderBottom = "3px solid var(--blue-color)";
    linkone.style.color = "var(--blue-color)";
    linktwo.style.borderBottom = "none";
    linkthree.style.borderBottom = "none";
    linkfive.style.borderBottom = "none";
    linkfour.style.borderBottom = "none";
    linksix.style.borderBottom = "none";
    linkfour.style.color = "var(--bluegray-color";
    linktwo.style.color = "var(--bluegray-color";
    linkthree.style.color = "var(--bluegray-color";
    linkfive.style.color = "var(--bluegray-color";
    linksix.style.color = "var(--bluegray-color";
})

linktwo.addEventListener('click', () => {
    linktwo.style.borderBottom = "3px solid var(--blue-color)";
    linktwo.style.color = "var(--blue-color)";
    linkone.style.borderBottom = "none";
    linkthree.style.borderBottom = "none";
    linkfour.style.borderBottom = "none";
    linkfive.style.borderBottom = "none";
    linksix.style.borderBottom = "none";
    linkone.style.color = "var(--bluegray-color";
    linkfour.style.color = "var(--bluegray-color";
    linkthree.style.color = "var(--bluegray-color";
    linkfive.style.color = "var(--bluegray-color";
    linksix.style.color = "var(--bluegray-color";
})

linkthree.addEventListener('click', () => {
    linkthree.style.borderBottom = "3px solid var(--blue-color)";
    linkthree.style.color = "var(--blue-color)";
    linkone.style.borderBottom = "none";
    linktwo.style.borderBottom = "none";
    linkfour.style.borderBottom = "none";
    linkfive.style.borderBottom = "none";
    linksix.style.borderBottom = "none";
    linkone.style.color = "var(--bluegray-color";
    linktwo.style.color = "var(--bluegray-color";
    linkfour.style.color = "var(--bluegray-color";
    linkfive.style.color = "var(--bluegray-color";
    linksix.style.color = "var(--bluegray-color";
})


linkfour.addEventListener('click', () => {
    linkfour.style.borderBottom = "3px solid var(--blue-color)";
    linkfour.style.color = "var(--blue-color)";
    linkone.style.borderBottom = "none";
    linktwo.style.borderBottom = "none";
    linkthree.style.borderBottom = "none";
    linkfive.style.borderBottom = "none";
    linksix.style.borderBottom = "none";
    linkone.style.color = "var(--bluegray-color";
    linktwo.style.color = "var(--bluegray-color";
    linkthree.style.color = "var(--bluegray-color";
    linkfive.style.color = "var(--bluegray-color";
    linksix.style.color = "var(--bluegray-color";
})

linkfive.addEventListener('click', () => {
    linkfive.style.borderBottom = "3px solid var(--blue-color)";
    linkfive.style.color = "var(--blue-color)";
    linkone.style.borderBottom = "none";
    linktwo.style.borderBottom = "none";
    linkthree.style.borderBottom = "none";
    linkfour.style.borderBottom = "none";
    linksix.style.borderBottom = "none";
    linkone.style.color = "var(--bluegray-color";
    linktwo.style.color = "var(--bluegray-color";
    linkthree.style.color = "var(--bluegray-color";
    linkfour.style.color = "var(--bluegray-color";
    linksix.style.color = "var(--bluegray-color";
})

linksix.addEventListener('click', () => {
    linksix.style.borderBottom = "3px solid var(--blue-color)";
    linksix.style.color = "var(--blue-color)";
    linkone.style.borderBottom = "none";
    linktwo.style.borderBottom = "none";
    linkthree.style.borderBottom = "none";
    linkfour.style.borderBottom = "none";
    linkfive.style.borderBottom = "none";
    linkone.style.color = "var(--bluegray-color";
    linktwo.style.color = "var(--bluegray-color";
    linkthree.style.color = "var(--bluegray-color";
    linkfive.style.color = "var(--bluegray-color";
    linkfour.style.color = "var(--bluegray-color";
})

