function openTab (evt, cont){
    const tabcontent = document.getElementsByClassName("containerContent");
    const tablinks = document.getElementsByClassName("tabLinks");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cont).style.display = "flex";
    evt.currentTarget.className = "active";
}
