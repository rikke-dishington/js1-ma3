const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=da8ae40d5a8c4875a90089bb4681f58d";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
      console.log(data[i].rating);
      console.log(data[i].tags);

      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">${data[i].name} ${data[i].rating} ${data[i].tags}</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Oh no! An error occurred");
  }
}

getGames();
