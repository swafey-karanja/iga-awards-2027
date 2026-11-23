// PLACEHOLDER: the nominee shape isn't known yet (the API returns []). Adjust when it is.
export interface Nominee {
    nominee_id?: number;
    nominee?: string;
}

export interface AwardCategory {
    category_id: number;
    category_title: string;
    description: string;
    priority: number;
    nominees: Nominee[];
}