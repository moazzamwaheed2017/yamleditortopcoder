export interface IManagement {
    'dev-managers': {
        title: string;
        members: [
            {
                id: string;
                ntid: null;
                name: string;
                email: string;
                phone: string;
                employer: string;
                location: string;
                upline: string;
            }
        ]
    };
    directors: {
        title: string;
        members: [
            {
                id: string;
                ntid: null;
                name: string;
                email: string;
                phone: string;
                employer: string;
                location: string;
                upline: string;
                title: string;
            }
        ]
    };
    'product-owners': {
        title: string;
        members: [
            {
                id: string;
                ntid: null;
                name: string;
                email: string;
                phone: string;
                employer: string;
                location: string;
                upline: string;
            }
        ]
    };
    'scrum-masters': [
        {
            id: string;
            ntid: null;
            name: string;
            email: string;
            phone: string;
            employer: string;
            location: string;
            upline: string;
        }
    ];
    'sr-dev-managers': {
        title: string;
        members: [
            {
                id: string;
                ntid: null;
                name: string;
                email: string;
                phone: string;
                employer: string;
                location: string;
                upline: string;
                title: string;
            }
        ]
    };

    'sr-directors': {
        title: string;
        members: [
            {
                id: string;
                ntid: null;
                name: string;
                email: string;
                phone: string;
                employer: string;
                location: string;
                upline: string;
            }
        ]
    };
    'sr-product-managers': {
        title: string;
        members: [
            {
                id: string;
                ntid: null;
                name: string;
                email: string;
                phone: string;
                employer: string;
                location: string;
                upline: string;
            }
        ]
    };
}
