
// NAVBAR DROPDOWN FUNCTIONALITY

function showDropdown() {
    document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(e) {
    if (!e.target.matches('.nav-btn') && !e.target.matches('.spinny')) {
        var dropdown = document.getElementsByClassName('nav-content');
        for (let i = 0; i < dropdown.length; i++) {
            if(dropdown[i].classList.contains('show')) {
                dropdown[i].classList.remove('show');
            }
        }
    }
}

function showSlide() {
    var projects = document.getElementById("popup-projects")
    projects.classList.toggle('show-flex')
    projects.classList.toggle('hide-flex')
    document.getElementById("title-area").classList.toggle('slide-left');
    document.getElementById("title-buttons-column").classList.toggle('title-btn');
}
