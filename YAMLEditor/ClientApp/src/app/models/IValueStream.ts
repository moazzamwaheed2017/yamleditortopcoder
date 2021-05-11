export interface IValueStream {
    description: string;
    name: string;
    groups: [
        {
            description: string;
            managers: string[];
            name: string;
            teams: [
                {
                    csm: string;
                    members: string[];
                    name: string;
                }
            ]
        }

    ];
}
