import { Repo } from "./Repo";

export class User {
    private login: string;
    private name: string;
    private publicReposCount: number;
    private followers: number;
    private repos?: Repo[];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.name = userResponse.name;
        this.publicReposCount = userResponse.public_repos;
        this.followers = userResponse.followers;
    }

    setRepos(repos : Repo[]) {
        this.repos = repos;
    }

}
