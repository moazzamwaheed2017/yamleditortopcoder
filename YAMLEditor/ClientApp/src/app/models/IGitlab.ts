export interface IGitlab {
    members: [
        {
            username: string;
            name: string;
            email: string;
            employer: string;
        }
    ];
    paths: {
        groups: string[];
        projects: string[];
    };
}
