let toggleNavStatus = false;

let toggleNav = function () {
    // let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden"
        toggleNavStatus = false;
    }
};


const bodyElement = document.body;

var linkHome = document.querySelector("li:nth-child(1)");

linkHome.addEventListener("click", changeBackgroundHome);
function changeBackgroundHome() {
    bodyElement.classList.add("bg-grey");
};

var linkRed = document.querySelector("li:nth-child(2)");

linkRed.addEventListener("click", changeBackgroundRed);
function changeBackgroundRed () {
    bodyElement.classList.add("bg-red");
};

var linkOrange = document.querySelector("li:nth-child(3)");

linkOrange.addEventListener("click", changeBackgroundRed);
function changeBackgroundRed () {
    bodyElement.classList.add("bg-orange");
}

var linkViolet = document.querySelector("li:nth-child(4)");

linkViolet.addEventListener("click", changeBackgroundRed);
function changeBackgroundRed () {
    bodyElement.classList.add("bg-violet");
}

var linkAquamarine = document.querySelector("li:nth-child(5)");

linkAquamarine.addEventListener("click", changeBackgroundRed);
function changeBackgroundRed () {
    bodyElement.classList.add("bg-aquamarine");
}