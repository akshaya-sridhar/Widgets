/*---Javascript for Navbar-----*/

function dropMenu()
{
    document.getElementById("menu_links").style.transitionDelay = "400ms"
    document.getElementById("menu_links").style.opacity = 100
    document.getElementById("menu").style.transitionDelay = "0"
    document.getElementById("menu").classList.toggle("drop")
    document.getElementById("menu_icon").style.display = "none"
    document.getElementById("close_icon").style.display = "block"
}

function closeMenu()
{
    document.getElementById("menu").style.transitionDelay = "400ms"
    document.getElementById("menu").classList.toggle("drop")
    document.getElementById("close_icon").style.display = "none"
    document.getElementById("menu_icon").style.display = "block"
    document.getElementById("menu_links").style.transitionDelay = "0"
    document.getElementById("menu_links").style.opacity = 0
    
}