const userInput = document.querySelector(".search-bar");
const btn = document.querySelector(".search-btn");
const card = document.querySelector(".card");
const login_name = document.querySelector(".user-name");
const avatar = document.querySelector(".user-image");
const bio = document.querySelector(".user-bio");

btn.addEventListener("click", () => {
  const userText = userInput.value.trim();
  if (userText != "") {
    getUserData(userText);
  } else {
    alert("Invalid Input");
  }
});
function getUserData(text) {
  userInput.value = "";
  fetch(`https://api.github.com/users/${text}`)
    .then((response) => response.json())
    .then((data) => renderTask(data))
    .catch((error) => {
      console.error("Something went wrong:", error);
      alert("User not found")
    });
}

function renderTask(data) {
  if (data.message !== "Not Found") {
    login_name.textContent = data.login;
    bio.textContent = data.bio ? data.bio : "No bio available";
    avatar.src = data.avatar_url;
    card.style.display = "block";
  } else {
    alert("User doesn't exist");
    card.style.display = "none";
  }
}
