import { Repo } from "./Repo";
import { User } from "./User";

export interface GithubApiService {
    getUserInfo(userName: string, cb: (user: User) => any):void;
    getRepos(userName: string, cb: (repos: Repo[]) => any):void;
}