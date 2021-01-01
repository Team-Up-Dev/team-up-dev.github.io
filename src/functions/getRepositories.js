import { Octokit } from "@octokit/core";


const octokit = new Octokit();

function getRepositories(type = "public", repositoriesAmount = 8, sort = "desc", page = 1) {
    return octokit.request("GET /orgs/{org}/repos", {
        org: "Team-Up-Dev",
        type: type,
        sort: sort,
        page: page,
        per_page: repositoriesAmount
    });

}

function latestRepositories(repositoriesAmount, page = 1) {
    let repositories = getRepositories("public", repositoriesAmount, "desc");
    return repositories;
}

export default class {
    constructor(repo) {
        this["langs_url"] = repo["languages_url"];
        this.owner = repo.owner.login;
        this.repoName = repo.name;
    }

    async getLanguanges() {
        const languages = await octokit.request(`GET /repos/{owner}/{repo}/languages`, {
            owner: this.owner,
            repo: this.repoName
        });
        // console.log(languages);
        let langs = Object.entries(languages["data"]);
        let totalVal = Object.values(languages["data"]).reduce((a, b) => a + b);

        langs = langs.map((lang, idx) => {
            let langValuePercentage = Math.round(lang[1] / totalVal * 100);
            return [lang[0], langValuePercentage]
        })

        langs = langs.map((langRepo, idx) => {
            return {
                lang: langRepo[0],
                value: langRepo[1]
            }
        })

        let a = langs.reduce((a, b) => {

            return a + b["value"];
        }, 0)

        if (a < 100) {
            langs.push({ lang: "other", value: 100 - a })
        }

        // console.log(langs)

        return langs
        // return objects of array
    }
}

export { latestRepositories as getLatestRepo };
