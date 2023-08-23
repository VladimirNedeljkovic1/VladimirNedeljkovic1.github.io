/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLinks = document.querySelectorAll('.nav__link'); // Select all navigation links

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
}

// Add click event listener to each navigation link
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        // Remove 'active-link' class from all links
        navLinks.forEach((link) => {
            link.classList.remove('active-link');
        });

        // Add 'active-link' class to the clicked link
        navLink.classList.add('active-link');

        // Close the sidebar
        navMenu.classList.remove('show-sidebar');
    });
});




/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll (".input")

function focusFunc () {
 let parent = this.parentNode;
 parent.classList.add("focus");
}

function blurFunc () {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
} )


