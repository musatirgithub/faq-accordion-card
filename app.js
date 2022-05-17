function atClick(){
    let quests = document.getElementsByClassName("quest");
    function activer() {
        this.classList.toggle("active");
    }
    for (let i = 0; i < quests.length; i++) {
        quests[i].classList.remove("active");
        quests[i].addEventListener("click", activer);
    }
}