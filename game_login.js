function addPlayer() {
    var namePlay1 = document.getElementById("jog-1").value
    var namePlay2 = document.getElementById("jog-2").value
    localStorage.setItem("Name1", namePlay1)
    localStorage.setItem("Name2", namePlay2)

    window.location = "page_game.html"
}