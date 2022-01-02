let closesGameAnouncement = () => {
    let modalBox = document.querySelector(".alert");
    let games = document.querySelector(".gameDiv");
    modalBox.style.display = "block";
    games.style.display = "none";
    setTimeout(() => {
        modalBox.style.display = "none";
        games.style.display = "block";

    }, 2000)


}
debugger;
let closesGame = document.querySelectorAll(".closesGames")
for (let index = 0; index < closesGame.length; index++) {
    closesGame[index].addEventListener('click', closesGameAnouncement);

}