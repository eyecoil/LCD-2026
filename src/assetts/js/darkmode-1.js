let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const html = document.documentElement;

// check if darm mode enabled
// if enabled turn off
//if disabled turn on

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode','enabled' );
    html.setAttribute('data-bs-theme', 'dark');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    html.setAttribute('data-bs-theme', 'light');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    // darkMode = localStorage.getItem('bsTheme');
    // console.log("test");
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
        // console.log(bsTheme);
    } else {
        disableDarkMode();
        console.log(darkMode);
        // console.log(bsTheme);
    }
})