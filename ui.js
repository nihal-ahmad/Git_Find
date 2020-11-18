class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.repo = document.getElementById("repo");
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
     
    </div>
    <div class="col-md-9 lead" >
    <span class="badge  badge-primary "><a href="#" style="color: black; ">Public Repos: ${user.public_repos}</a></span>
    <span class="badge  badge-danger"><a href="#" style="color: black; ">Public Gists: ${user.public_gists}</a></span>
    <span class="badge  badge-secondary"><a href="#" style="color: black; ">Followers: ${user.followers}</a></span>
    <span class="badge  badge-success"><a href="#" style="color: black; ">Following: ${user.following}</a></span>
    <br><br>
    <ul class="list-group">
    <li class="list-group-item " style="font-weight:bold; color: #242628;">
    COMPANY : ${user.company}
    </li>
    <li class="list-group-item " style="font-weight:bold; color: #242628;">
    BLOG : ${user.blog}
    </li><li class="list-group-item " style="font-weight:bold; color: #242628; ">
    LOCATION : ${user.location}
    </li>
    </li><li class="list-group-item " style="font-weight:bold; color: #242628;">
    MEMBER SINCE : ${user.created_at}
    </li>
    </ul>
    </div>
    </div>
    </div>
    <div style="display:flex; justify-content: center; margin-top: 2em;">
    <div class="page-heading mb-3">
    <div style="display:flex; justify-content: center;">
    LATEST REPOS 
    </div>
    </div>
    </div>
    <div id="repos">
    
    </div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showRepos(repo) {
    let output = "";
    repo.forEach(function (repo) {
      output += `
    <div class="card card-body mb-2">
    <div class="row">
    <div class="col-md-6" >
    <div class="lead" >
    <a href="${repo.html_url}" target="_blank" style="color: #242628; font-weight:bold;">${repo.name}</a>
    </div>
    </div>
    <div class="lead">
    <div class="col-md-6">
    <span class="badge  badge-primary " style="color: #000;"><a href="#" style="color: black; ">STARS: ${repo.stargazers_count}</a></span>
    <span class="badge  badge-danger " style="color: #000; "><a href="#" style="color: black; ">WATCHERS: ${repo.watchers_count}</a></span>
    <span class="badge  badge-success " style="color: #000; "><a href="#" style="color: black; ">FORKS: ${repo.forms_count}</a></span>
    </div>
    </div>
    </div>
    </div>
    `;
    });
    this.repo.innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();

    const div = document.createElement("div");

    div.className = className;

    div.appendChild(document.createTextNode(message));
    div.textContent.toLocaleUpperCase();

    const container = document.querySelector(".search-container");

    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
