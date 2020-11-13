
// NAVBAR DROPDOWN FUNCTIONALITY

function showDropdown() {
    document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(e) {
    if (!e.target.matches('.nav-btn')) {
        var dropdown = document.getElementsByClassName('nav-content');
        for (let i = 0; i < dropdown.length; i++) {
            if(dropdown[i].classList.contains('show')) {
                dropdown[i].classList.remove('show');
            }
        }
    }
}

function showSlide() {
    console.log(document.getElementById('title-buttons-column'));
    document.getElementById("title-area").classList.toggle('slide-left');
    document.getElementById("title-buttons-column").classList.toggle('title-btn');
}