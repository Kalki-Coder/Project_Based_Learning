const userInput = document.querySelector(".search-bar");
const btn = document.querySelector(".search-btn");
const card = document.querySelector(".card");
const login_name = document.querySelector(".user-name");
const avatar = document.querySelector(".user-image");
const bio = document.querySelector(".user-bio");
const search_bar = document.querySelector(".search-area");
const repo_list = document.querySelector(".repos");

btn.addEventListener("click", () => {
  const userText = userInput.value.trim();
  if (userText != "") {
    getUserData(userText);
  } else {
    alert("Invalid Input");
  }
});
async function getUserData(text) {
  userInput.value = "";
  try {
    const response = await fetch(`https://api.github.com/users/${text}`);
    const data = await response.json();
    if (data.message !== "Not Found") {
      try {
        const repo_response = await fetch(
          `https://api.github.com/users/${text}/repos`,
        );
        const repo_data = await repo_response.json();
        const sortedData = repo_data.slice().sort((a, b) => b.forks - a.forks);
        renderRepos(sortedData);
      } catch (err) {
        console.error("Something went wrong:", err);
      }
    }
    renderTask(data);
  } catch (error) {
    console.error("Something went wrong:", error);
    alert("User not found");
  }
}

function renderTask(data) {
  if (data.message !== "Not Found") {
    login_name.textContent = data.login;
    bio.textContent = data.bio ? data.bio : "No bio available";
    avatar.src = data.avatar_url;
  } else {
    alert("User doesn't exist");
  }
}

function renderRepos(data) {
  if (data.message !== "Not Found") {
    repo_list.value = `Top 5 Repos of the ${userInput.value.trim()}`;
    const repo_lists = document.createElement("li");
    data.array.forEach((element) => {
      repo_lists.innerHTML = <a href="element.html_url">element.name</a>;
      repo_list.appendChild(repo_lists);
    });
    card.style.display = "block";
    search_bar.style.display = "none";
  } else {
    alert("User is a noob");
    card.style.display = "none";
  }
}
