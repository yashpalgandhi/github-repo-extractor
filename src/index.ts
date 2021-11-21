import { GithubApiService } from "./GithubApiService";
import { GithubApiServiceImpl } from "./GithubApiServiceImpl";
import { Repo } from "./Repo";
import { User } from "./User";
import * as _ from "lodash";

let service: GithubApiService = new GithubApiServiceImpl();

if(process.argv.length < 3) {
    console.log("Usage: npm start <username>");
} else {
    let username = process.argv[2];
    service.getUserInfo(username, (user: User) => {
        service.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) =>  repo.getForkCount() * -1])
            let filteredRepos = _.take(sortedRepos, 5);
            user.setRepos(filteredRepos);
            console.log(user);
        });
    });
}

