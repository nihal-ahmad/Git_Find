"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);

    this.profile = document.getElementById("profile");
    this.repo = document.getElementById("repo");
  }

  _createClass(UI, [{
    key: "showProfile",
    value: function showProfile(user) {
<<<<<<< HEAD
      this.profile.innerHTML = "\n    <div class=\"card card-body mb-3\">\n    <div class=\"row\">\n    <div class=\"col-md-3\">\n    <img class=\"img-fluid mb-2\" src=\"".concat(user.avatar_url, "\">\n    <a href=\"").concat(user.html_url, "\" target=\"_blank\" class=\"btn btn-primary btn-block mb-3\">View Profile</a>\n     \n    </div>\n    <div class=\"col-md-9 lead\" >\n    <span class=\"badge  badge-primary \"><a href=\"#\" style=\"color: black; \">Public Repos: ").concat(user.public_repos, "</a></span>\n    <span class=\"badge  badge-danger\"><a href=\"#\" style=\"color: black; \">Public Gists: ").concat(user.public_gists, "</a></span>\n    <span class=\"badge  badge-secondary\"><a href=\"#\" style=\"color: black; \">Followers: ").concat(user.followers, "</a></span>\n    <span class=\"badge  badge-success\"><a href=\"#\" style=\"color: black; \">Following: ").concat(user.following, "</a></span>\n    <br><br>\n    <ul class=\"list-group\">\n    <li class=\"list-group-item \" style=\"font-weight:bold; color: #242628;\">\n    COMPANY : ").concat(user.company, "\n    </li>\n    <li class=\"list-group-item \" style=\"font-weight:bold; color: #242628;\">\n    BLOG : ").concat(user.blog, "\n    </li><li class=\"list-group-item \" style=\"font-weight:bold; color: #242628; \">\n    LOCATION : ").concat(user.location, "\n    </li>\n    </li><li class=\"list-group-item \" style=\"font-weight:bold; color: #242628;\">\n    MEMBER SINCE : ").concat(user.created_at, "\n    </li>\n    </ul>\n    </div>\n    </div>\n    </div>\n    <div style=\"display:flex; justify-content: center; margin-top: 2em;\">\n    <div class=\"page-heading mb-3\">\n    <div style=\"display:flex; justify-content: center;\">\n    LATEST REPOS \n    </div>\n    </div>\n    </div>\n    <div id=\"repos\">\n    \n    </div>\n    ");
=======
      this.profile.innerHTML = "\n    <div class=\"card card-body mb-3\">\n    <div class=\"row\">\n    <div class=\"col-md-3\">\n    <img class=\"img-fluid mb-2\" src=\"".concat(user.avatar_url, "\">\n    <a href=\"").concat(user.html_url, "\" target=\"_blank\" class=\"btn btn-primary btn-block mb-3\">View Profile</a>\n     \n    </div>\n    <div class=\"col-md-9 lead\" style=\"color:black;\">\n    <span class=\"badge  badge-primary \" style=\"color:black;  \">Public Repos: ").concat(user.public_repos, "</span>\n    <span class=\"badge  badge-danger \" style=\"color:black; \">Public Gists: ").concat(user.public_gists, "</span>\n    <span class=\"badge  badge-secondary \" style=\"color:black; \">Followers: ").concat(user.followers, "</span>\n    <span class=\"badge  badge-success \" style=\"color:black; \">Following: ").concat(user.following, "</span>\n    <br><br>\n    <ul class=\"list-group\">\n    <li class=\"list-group-item \" style=\"font-weight:bold; color: #242628;\">\n    COMPANY : ").concat(user.company, "\n    </li>\n    <li class=\"list-group-item \" style=\"font-weight:bold; color: #242628;\">\n    BLOG : ").concat(user.blog, "\n    </li><li class=\"list-group-item \" style=\"font-weight:bold; color: #242628; \">\n    LOCATION : ").concat(user.location, "\n    </li>\n    </li><li class=\"list-group-item \" style=\"font-weight:bold; color: #242628;\">\n    MEMBER SINCE : ").concat(user.created_at, "\n    </li>\n    </ul>\n    </div>\n    </div>\n    </div>\n    <div style=\"display:flex; justify-content: center; margin-top: 2em;\">\n    <div class=\"page-heading mb-3\">\n    <div style=\"display:flex; justify-content: center;\">\n    LATEST REPOS \n    </div>\n    </div>\n    </div>\n    <div id=\"repos\">\n    \n    </div>\n    ");
>>>>>>> d04d264fc1ac8b2979f8907ce2f6a1ff26a385da
    }
  }, {
    key: "clearProfile",
    value: function clearProfile() {
      this.profile.innerHTML = "";
    }
  }, {
    key: "showRepos",
    value: function showRepos(repo) {
      var output = "";
      repo.forEach(function (repo) {
<<<<<<< HEAD
        output += "\n    <div class=\"card card-body mb-2\">\n    <div class=\"row\">\n    <div class=\"col-md-6\" >\n    <div class=\"lead\" >\n    <a href=\"".concat(repo.html_url, "\" target=\"_blank\" style=\"color: #242628; font-weight:bold;\">").concat(repo.name, "</a>\n    </div>\n    </div>\n    <div class=\"lead\">\n    <div class=\"col-md-6\">\n    <span class=\"badge  badge-primary \" style=\"color: #000;\"><a href=\"#\" style=\"color: black; \">STARS: ").concat(repo.stargazers_count, "</a></span>\n    <span class=\"badge  badge-danger \" style=\"color: #000; \"><a href=\"#\" style=\"color: black; \">WATCHERS: ").concat(repo.watchers_count, "</a></span>\n    <span class=\"badge  badge-success \" style=\"color: #000; \"><a href=\"#\" style=\"color: black; \">FORKS: ").concat(repo.forms_count, "</a></span>\n    </div>\n    </div>\n    </div>\n    </div>\n    ");
=======
        output += "\n    <div class=\"card card-body mb-2\">\n    <div class=\"row\">\n    <div class=\"col-md-6\" >\n    <div class=\"lead\" >\n    <a href=\"".concat(repo.html_url, "\" target=\"_blank\" style=\"color: #242628; font-weight:bold;\">").concat(repo.name, "</a>\n    </div>\n    </div>\n    <div class=\"lead\">\n    <div class=\"col-md-6\">\n    <span class=\"badge  badge-primary \" style=\"color:black;\">STARS: ").concat(repo.stargazers_count, "</span>\n    <span class=\"badge  badge-danger \" style=\"color:black; \">WATCHERS: ").concat(repo.watchers_count, "</span>\n    <span class=\"badge  badge-success \" style=\"color:black; \">FORKS: ").concat(repo.forms_count, "</span>\n    </div>\n    </div>\n    </div>\n    </div>\n    ");
>>>>>>> d04d264fc1ac8b2979f8907ce2f6a1ff26a385da
      });
      this.repo.innerHTML = output;
    }
  }, {
    key: "showAlert",
    value: function showAlert(message, className) {
      var _this = this;

      // Clear any remaining alerts
      this.clearAlert();
      var div = document.createElement("div");
      div.className = className;
      div.appendChild(document.createTextNode(message));
      div.textContent.toLocaleUpperCase();
      var container = document.querySelector(".search-container");
      var search = document.querySelector(".search");
      container.insertBefore(div, search);
      setTimeout(function () {
        _this.clearAlert();
      }, 2000);
    }
  }, {
    key: "clearAlert",
    value: function clearAlert() {
      var currentAlert = document.querySelector(".alert");

      if (currentAlert) {
        currentAlert.remove();
      }
    }
  }]);

  return UI;
}();