/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


const sections = document.querySelectorAll('.landing__container');
const navmenu = document.querySelector('#navbar__list');


function set_standard_menu(node){
    node.setAttribute('class', 'menu__link');
}

function creating_menu(node){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = node.parentNode.getAttribute('data-nav');
    tid = node.parentNode.getAttribute('id');
    a.href = "#" + tid;
    set_standard_menu(a);
    a.id = "__" + tid;
    li.appendChild(a);
    navmenu.appendChild(li);
}

function set_active_menu(node){
    node.addEventListener('click', function() {        
        a_item.forEach(set_standard_menu);
        node.classList.add('menu__active');
    })
}

sections.forEach(creating_menu);

const a_item = document.querySelectorAll('.menu__link');

a_item.forEach(set_active_menu);

sections.forEach(set_active_section);

function set_active_section(node){
    window.addEventListener('scroll', function() {
        tid = "__" + node.parentNode.getAttribute('id');
        active_menu = document.querySelector('#' + tid);
        if (node.getBoundingClientRect().top + 200 < window.innerHeight &&
            node.getBoundingClientRect().bottom + 200 > window.innerHeight       
        )  {
            
            active_menu.classList.add('menu__active');
            node.parentNode.classList.add('your-active-class');
        }
        else {
            active_menu.classList.remove('menu__active');
            node.parentNode.classList.remove('your-active-class');

        }

    })
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


