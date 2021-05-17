const toggleBtn = document.querySelector(".btn-toggle-nav");
toggleBtn.addEventListener("click", () => {
	toggleNav();
});

let toggleNavStatus = false;

const toggleNav = function () {
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
const linkHome = document.querySelector("li:nth-child(1)");

linkHome.addEventListener("click", changeBackgroundHome);
function changeBackgroundHome() {
    bodyElement.removeAttribute('class');
	bodyElement.classList.add("bg-grey");
	toggleNav();
};

const linkRed = document.querySelector("li:nth-child(2)");

linkRed.addEventListener("click", changeBackgroundRed);
function changeBackgroundRed() {
    bodyElement.removeAttribute('class');
    bodyElement.classList.add("bg-red");
    toggleNav();
};

const linkOrange = document.querySelector("li:nth-child(3)");

linkOrange.addEventListener("click", changeBackgroundOrange);
function changeBackgroundOrange() {
    bodyElement.removeAttribute('class');
    bodyElement.classList.add("bg-orange");
    toggleNav();
}

const linkViolet = document.querySelector("li:nth-child(4)");

linkViolet.addEventListener("click", changeBackgroundViolet);
function changeBackgroundViolet() {
    bodyElement.removeAttribute('class');
    bodyElement.classList.add("bg-violet");
    toggleNav();
}

const linkAquamarine = document.querySelector("li:nth-child(5)");

linkAquamarine.addEventListener("click", changeBackgroundAqua);
function changeBackgroundAqua() {
    bodyElement.removeAttribute('class');
    bodyElement.classList.add("bg-aquamarine");
    toggleNav();
}
