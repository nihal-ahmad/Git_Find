class Github {
  constructor() {
    this.client_id = "0d7ca65b4528310ef36d";
    this.client_secret = "426e5a4206993d505226b4071863370b4042bd12";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}$client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repo = await repoResponse.json();
    return {
      profile: profile,
      repo: repo,
    };
  }
}
