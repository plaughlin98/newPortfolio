
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


//PopUp Slide Functions - This is super messy, but it works.. , figure out how to condense

var projects = document.getElementById("popup-projects");
var about = document.getElementById('popup-about');
var titleArea = document.getElementById("title-area");
var titleBtnColumns = document.getElementById("title-buttons-column");

function showSlide(popup) {
    if (popup === 'projects') {
        if (about.classList === 'show-flex') {
            about.classList.toggle('show-flex');
            about.classList.toggle('hide-flex');
            titleArea.classList.toggle('slide-left');
            titleBtnColumns.classList.toggle('title-btn');
        }
        projects.classList.toggle('show-flex');
        projects.classList.toggle('hide-flex');
        titleArea.classList.toggle('slide-left');
        titleBtnColumns.classList.toggle('title-btn');
    } else if (popup === 'about') {
        if (projects.classList === 'show-flex') {
            projects.classList.toggle('show-flex');
            projects.classList.toggle('hide-flex');
            titleArea.classList.toggle('slide-left');
            titleBtnColumns.classList.toggle('title-btn');
        }
        about.classList.toggle('show-flex')
        about.classList.toggle('hide-flex')
        titleArea.classList.toggle('slide-left');
        titleBtnColumns.classList.toggle('title-btn');
    }
}

