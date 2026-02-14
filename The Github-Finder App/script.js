// DOM Elements
const searchBtn = document.querySelector(".search-btn");
const userInput = document.querySelector("#user-input");
const profileCard = document.querySelector("#profile-card");
const errorMsg = document.querySelector("#no-results");
const body = document.querySelector("body");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeText = themeToggle.querySelector("p");

// Default State (Dark Mode)
body.classList.add("dark");

// Event Listeners
searchBtn.addEventListener("click", () => {
  const user = userInput.value.trim();
  if (user) {
    getUserData(user);
  }
});

// Theme Toggle Listener
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    themeText.textContent = "LIGHT";
    themeIcon.className = "fas fa-sun";
  } else {
    themeText.textContent = "DARK";
    themeIcon.className = "fas fa-moon";
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const user = userInput.value.trim();
    if (user) {
      getUserData(user);
    }
  }
});

// Main Fetch Function
async function getUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      showError();
      return;
    }

    // If user found, fetch repos immediately
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`);
    const repoData = await repoResponse.json();

    // Sort repos by stars (God Level sorting)
    const sortedRepos = repoData
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);

    renderProfile(data, sortedRepos);
    errorMsg.style.display = "none";
  } catch (err) {
    console.error(err);
    showError();
  }
}

// Error Handling
function showError() {
  errorMsg.style.display = "block";
  // Reset after 3 seconds
  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 3000);
}

// Date Formatter
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return `Joined ${date.toLocaleDateString("en-GB", options)}`;
}

// Check for Null values
function checkNull(param) {
  return param === "" || param === null ? "Not Available" : param;
}

// Render Logic
function renderProfile(user, repos) {
  const bio = user.bio ? user.bio : "This profile has no bio";
  const twitter = checkNull(user.twitter_username);
  const location = checkNull(user.location);
  const website = checkNull(user.blog);
  const company = checkNull(user.company);

  // Generate Repos HTML
  let repoHTML = '';
  if (repos.length > 0) {
      repos.forEach(repo => {
        repoHTML += `
        <a href="${repo.html_url}" target="_blank" class="repo-card">
            <div class="repo-info">
                <div class="repo-name">${repo.name}</div>
                <div class="repo-desc">${repo.description || "No description"}</div>
            </div>
            <div class="repo-stats">
                <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            </div>
        </a>
        `;
      });
  } else {
      repoHTML = '<p>No public repositories found.</p>';
  }

  // Inject HTML
  profileCard.innerHTML = `
    <div class="profile-header">
      <img src="${user.avatar_url}" alt="Avatar" class="avatar" />
      <div class="profile-info">
        <div class="name">
          <h2>${user.name || user.login}</h2>
          <a href="${user.html_url}" target="_blank" class="username">@${user.login}</a>
        </div>
        <p class="joined-date">${formatDate(user.created_at)}</p>
      </div>
    </div>

    <p class="bio">${bio}</p>

    <div class="stats-container">
      <div class="stat-item">
        <span class="stat-title">Repos</span>
        <span class="stat-value">${user.public_repos}</span>
      </div>
      <div class="stat-item">
        <span class="stat-title">Followers</span>
        <span class="stat-value">${user.followers}</span>
      </div>
      <div class="stat-item">
        <span class="stat-title">Following</span>
        <span class="stat-value">${user.following}</span>
      </div>
    </div>

    <div class="links-container">
      <div class="link-item ${location === 'Not Available' ? 'unavailable' : ''}">
        <i class="fas fa-map-marker-alt"></i>
        <span>${location}</span>
      </div>
      <div class="link-item ${twitter === 'Not Available' ? 'unavailable' : ''}">
        <i class="fab fa-twitter"></i>
        <span>${twitter}</span>
      </div>
      <div class="link-item ${website === 'Not Available' ? 'unavailable' : ''}">
        <i class="fas fa-link"></i>
        <a href="${website.startsWith('http') ? website : '#'}" target="_blank">${website}</a>
      </div>
      <div class="link-item ${company === 'Not Available' ? 'unavailable' : ''}">
        <i class="fas fa-building"></i>
        <span>${company}</span>
      </div>
    </div>

    <h4 class="repos-title">Top Repositories</h4>
    <div class="repo-list">
        ${repoHTML}
    </div>
  `;
}