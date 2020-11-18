"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Github =
/*#__PURE__*/
function () {
  function Github() {
    _classCallCheck(this, Github);

    this.client_id = "0d7ca65b4528310ef36d";
    this.client_secret = "426e5a4206993d505226b4071863370b4042bd12";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  _createClass(Github, [{
    key: "getUser",
    value: function getUser(user) {
      var profileResponse, repoResponse, profile, repo;
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("https://api.github.com/users/".concat(user, "?client_id=").concat(this.client_id, "&client_secret=").concat(this.client_secret)));

            case 2:
              profileResponse = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(fetch("https://api.github.com/users/".concat(user, "/repos?per_page=").concat(this.repo_count, "&sort=").concat(this.repo_sort, "$client_id=").concat(this.client_id, "&client_secret=").concat(this.client_secret)));

            case 5:
              repoResponse = _context.sent;
              _context.next = 8;
              return regeneratorRuntime.awrap(profileResponse.json());

            case 8:
              profile = _context.sent;
              _context.next = 11;
              return regeneratorRuntime.awrap(repoResponse.json());

            case 11:
              repo = _context.sent;
              return _context.abrupt("return", {
                profile: profile,
                repo: repo
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Github;
}();