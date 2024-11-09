const navBar = document.getElementById("draggable-nav");
        let isDragging = false, startX, startY, initialX, initialY;

navBar.addEventListener("mousedown", (e) => {
    isDragging = false;
    startX = e.clientX;
    startY = e.clientY;
    initialX = navBar.offsetLeft;
    initialY = navBar.offsetTop;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});


function onMouseMove(e) {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    navBar.style.left = initialX + deltaX + "px";
    navBar.style.top = initialY + deltaY + "px";
}


function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}

const aboutLink = document.getElementById("about-link");
const historyLink = document.getElementById("history-link");
const aboutPopup = document.getElementById("about-popup");
const historyPopup = document.getElementById("history-popup");

    aboutLink.addEventListener("mouseover", () => {
    aboutPopup.style.display = "block";
    aboutPopup.style.left = '${aboutLink.getBoundingClientRect().left}px';
    aboutPopup.style.top = '${aboutLink.getBoundingClientRect().bottom + 5}px';
});

    aboutLink.addEventListener("mouseout", () => {
    aboutPopup.style.display = "none";
});

    historyLink.addEventListener("mouseover", () => {
    historyPopup.style.display = "block";
    historyPopup.style.left = '${historyLink.getBoundingClientRect().left}px';
    historyPopup.style.top = '${historyLink.getBoundingClientRect().bottom + 5}px';
});


historyLink.addEventListener("mouseout", () => {
    historyPopup.style.display = "none";
});
var titleDiv = L.DomUtil.create('div', 'map-title');
titleDiv.innerHTML = "Map of Muntinlupa City, Philippines";
document.body.appendChild(titleDiv);