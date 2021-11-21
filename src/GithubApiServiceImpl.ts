import request from "request";
import { Repo } from "./Repo";
import { User } from "./User";
import {GithubApiService} from "./GithubApiService"
import {AppConstants} from "./AppConstants"

export class GithubApiServiceImpl implements GithubApiService {

    getUserInfo(userName: string, cb: (user: User) => any) {
       
        request.get(AppConstants.GITHUB_URL + userName, AppConstants.OPTIONS, 
            (error, response, body) => {
            let user = new User(body);
            cb(user);
        });
    }
    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get(AppConstants.GITHUB_URL + userName + "/repos", AppConstants.OPTIONS, 
            (error, response, body) => {
            cb(body.map((repo: any) => new Repo(repo)));
        });        
    }
}