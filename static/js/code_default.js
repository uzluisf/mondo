
// Tag <code> elements with language name
function do_code_tagging() {
    // Get all code and pre elements
    var elements = document.querySelectorAll('code');

    // Cycle through each code element
    for (var i = 0; i < elements.length; i++) {

        // Load language from class
        var lang = elements[i].getAttribute("class");

        // Remove 'language-' if lang is not empty
        if (lang != null ) {
          lang = lang.substr(lang.length - (lang.length-9));
        }

        // Create 'short-lang' parameter for element
        elements[i].setAttribute("data-lang", lang);
    }
}

function do_wrapping() {
    // Wrap <pre> elements with div
    function wrap(el, wrapper) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }

    var elements = document.querySelectorAll('pre');
    for (var i = 0; i < elements.length; i++) { 
        var el = elements[i];
        wrap(el, document.createElement('div'));
        
        var par1 = el.parentNode;
        par1.className = 'code-content';

        wrap(par1, document.createElement('div'));
        var par2 = par1.parentNode;
        par2.className = 'listingblock';
    } 
}

// light/dark theme toggler
function set_theme(theme) {
	var el = document.querySelector("html");
    if (theme === "dark" ) { el.className = "dark"; }
    else { 	el.className = "light";                 }
    localStorage.setItem("light-dark", theme);
}

function do_theming() {
	var button = document.querySelector('#invmode');
	var container = document.querySelector('html');
    button.onclick =  function() {
        (container.classList.contains('dark')) 
        ? set_theme('light') : set_theme('dark');
	}
}

var theme = localStorage.getItem("light-dark");
if (theme) {
	set_theme(theme);
}	

window.onload=function() {
    do_theming();
    do_code_tagging();
    do_wrapping();
}


