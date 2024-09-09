// handle menu
document.getElementById("menu-button").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "block";
    sidebar.style.width = "auto";
    const actualWidth = sidebar.offsetWidth; // Get the normal width of the sidebar
    sidebar.style.width = "0";
    setTimeout(() => {
        sidebar.style.width = actualWidth + "px";
    }, 10); // Small delay to allow transition
});

document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "0"; // Close the sidebar with transition  
});

// DARK MODE/LIGHT MODE

/**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* Fall back to system setting.
* Fall back to light mode.
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

/**
* Utility function to update the button text and aria-label.
*/
function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Light Mode" : "Dark Mode";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
}

/**
* Utility function to update the theme setting on the html tag
*/
function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

function updateLogos(logos, theme) {
    const old = theme === 'dark' ? 'light' : 'dark'

    for (i = 0; i < logos.length; i++) {
        for (c = 0; c < logos[i].children.length; c++) {
            li = logos[i].children[c];
            src = li.children[0].children[0].src
            if (!src.includes(theme)) {
                li.children[0].children[0].src = src.replace(old, theme)
            }
        }
    }
}

/**
* On page load:
*/

/**
* 1. Grab what we need from the DOM and system settings on page load
*/
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const socialLogos = document.querySelectorAll(".social-links-header")

/**
* 2. Work out the current site settings
*/
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/**
* 3. Update the theme setting and button text accoridng to current settings
*/
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });
updateLogos(socialLogos, currentThemeSetting)
/**
* 4. Add an event listener to toggle the theme
*/
button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
    updateLogos(socialLogos, newTheme)
    currentThemeSetting = newTheme;
});

// down arrow UNUSED
// window.addEventListener('scroll', function () {
//     const scrollDown = document.getElementById('scroll-down');
//     if (window.scrollY > 0) {
//         scrollDown.classList.add('arrow-hidden');
//     } else {
//         scrollDown.classList.remove('arrow-hidden');
//     }
// });
