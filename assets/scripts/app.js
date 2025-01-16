
const startButton = document.getElementById("startButton");
console.log("Start button element:", startButton);
startButton.addEventListener("click", () => {
    console.log("Button clicked");
    const playerName = document.getElementById("player-name").value;
    console.log("Player name:", playerName); // Проверим значение
    
    if (playerName.trim() !== "") {
        localStorage.setItem("playerName", playerName);
        console.log("Saved to localStorage:", localStorage.getItem("playerName")); // Проверим сохранение
        window.location.href = `pages/game.html`;
    } else {
        alert("Пожалуйста, введите имя!");
    }
});
