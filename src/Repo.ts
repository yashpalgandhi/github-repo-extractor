export class Repo {
    private name: string;
    private description: string;
    private repoUrl: string;
    private size: number;
    private forkCount: number;

    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.repoUrl = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks_count;
    }

    getForkCount(): number {
        return this.forkCount;
    }
}