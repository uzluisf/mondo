
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

// Wrap <pre> elements with div
function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

function do_wrapping() {
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


function add_link_current() {
    var currentLinks = document.querySelectorAll('.navigation-link');
   
    currentLinks.forEach(function(link) {
        var cur_window = window.location;
        if (cur_window.href.includes(link.href)) {
            if (link.href === cur_window.href) {
                link.className  += ' current-link';
            }
            else if ((cur_window.origin + '/') != link.href) {
                link.className  += ' current-link';
            }
        }
    });

}

// Add anchors to each h2 & h3 in article
function do_anchoring() {
    var headers = document.querySelectorAll('#content > h2, #content > h3');
    var page_url = window.location.href // Is there a better way to resolve the base url dinamically?
    if (headers) {
        headers.forEach(function(header) {
            header.innerHTML = `${header.innerText}<a class = "anchor" href="${page_url}#${header.id}">#</a>`;
        });
    }
}

// Take of light/dark theme
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
        if (container.classList.contains('dark')) {
            set_theme('light');
        }
        else {
            set_theme('dark');
        }
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
    add_link_current();
    do_anchoring();
}


