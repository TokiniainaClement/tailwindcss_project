
var nav = document.querySelector("#container-nav-link");

window.addEventListener('scroll', function() {
    
    if(this.window.scrollY > 0)
    {
        nav.style.backgroundColor = "rgb(255, 255, 255)";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }

})
