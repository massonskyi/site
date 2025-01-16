// assets/scripts/rating.js

document.addEventListener("DOMContentLoaded", () => {
  const ratingTable = document.getElementById("rating-table");

  // Функция для загрузки рейтинга из localStorage
  function loadRating() {
    const ratings = JSON.parse(localStorage.getItem("quizScores")) || [];
    ratings.sort((a, b) => b.score - a.score); // Сортируем по убыванию очков
    ratings.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.score}</td>
                <td>${user.time} seconds</td>
            `;
      ratingTable.appendChild(row);
    });
  }

  // Загружаем рейтинг при загрузке страницы
  loadRating();
});
