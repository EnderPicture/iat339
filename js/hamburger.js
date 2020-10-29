var navLogo = document.querySelector(".nav_logo");
var nav_item_button_a = document.querySelector(".nav_item_button a");
var nav_item_button_a_hover = document.querySelector(".nav_item_button a:hover");

var menu = document.querySelector("nav .menu");
var toggle = document.querySelector(".toggle");
var nav_item_button = document.querySelector(".nav_item_button");
var nav_items = document.querySelectorAll(".nav_item");
var nav_items_active = document.querySelectorAll(".nav_item.active");
var bars = document.querySelector(".bars");
var bars_before = document.querySelector(".bars::before");
var bars_after = document.querySelector(".bars::after");



function openNavBar() {
    
    nav_item_button_a_hover = document.querySelector(".nav_item_button a:hover");
    nav_items_active = document.querySelectorAll(".nav_item.active");
    if (screen.width > convertRemToPixels(50)) {
        for (let i = 0; i < nav_items.length; i++) {
            nav_items[i].style.display = "block";
            nav_items[i].style.width = "auto";
            nav_items[i].style.order = "3";
        }
        toggle.style.display = "none";
        navLogo.style.order = "1";
        navLogo.style.marginRight = "auto";
        nav_item_button.style.order = "2";
    } else if (screen.width > 480) {
        navLogo.style.alignSelf = "flex-start";
        nav_item_button.style.width = "auto";
        nav_item_button.style.order = "1";
        nav_item_button.style.display = "block";
        nav_item_button.style.marginLeft = "auto";
        nav_item_button_a.style.padding = "0.5rem 1rem";
        nav_item_button_a.style.backgroundColor = "var(--main-theme-color)";
        nav_item_button_a.style.border = "0.15rem var(--main-theme-color) solid";
        nav_item_button_a_hover.style.transition = "0.25s";
        nav_item_button_a_hover.style.backgroundColor = "transparent";
    } else {
        menu.style.display = "flex";
        menu.style.flexWrap = "wrap";
        menu.style.justifyContent = "space-between";
        menu.style.alignItems = "center";
        menu.style.height = "5rem";

        toggle.style.order = "1";
        toggle.style.cursor = "pointer";

        nav_item_button.style.order = "2";
        nav_item_button.style.width = "100%";
        nav_item_button.style.textAlign = "center";
        nav_item_button.style.backgroundColor = "var(--highlight-light-gray)";
        if (nav_item_button.style.display == "unset") {
            nav_item_button.style.display = "none";
        } else {
            nav_item_button.style.display = "unset";
        }

        for (let i = 0; i < nav_items.length; i++) {
            nav_items[i].style.width = "100%";
            nav_items[i].style.textAlign = "center";
            nav_items[i].style.order = "3";
            
            nav_items[i].style.backgroundColor = "var(--highlight-light-gray)";
            
            if (nav_items[i].style.display == "unset") {
                nav_items[i].style.display = "none";
            } else {
                nav_items[i].style.display ="unset";
            }
        }
        for (let i = 0; i < nav_items_active.length; i++) {
            nav_items_active[i].setAttribute("display", "block");
        }
        
        bars.style.backgroundColor = "var(--txt-color)";
        bars.style.display= "inline-block";
        bars.style.height = "0.128rem";
        bars.style.position= "relative";
        bars.style.width=  "1rem";

        /*bars_before.setAttribute("background-color", "var(--txt-color)");
        bars_before.setAttribute("content", "''");
        bars_before.setAttribute("display", "inline-block");
        bars_before.setAttribute("height", "0.128rem");
        bars_before.setAttribute("position", "absolute");
        bars_before.setAttribute("width", "1rem");
        bars_before.setAttribute("top", "5px");

        bars_after.setAttribute("background-color", "var(--txt-color)");
        bars_after.setAttribute("content", "''");
        bars_after.setAttribute("display", "inline-block");
        bars_after.setAttribute("height", "0.128rem");
        bars_after.setAttribute("position", "absolute");
        bars_after.setAttribute("width", "1rem");
        bars_after.setAttribute("top", "-5px");*/
    }
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.body).fontSize);
    //Code from https://stackoverflow.com/a/42769683
}