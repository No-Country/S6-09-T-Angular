export interface ClassroomResponse {
    _id?:               string;
    user_id?:            string;
    classroom_name?:     string;
    users?:             string[];
    other?:             Other[];
    __v?:               number;
    updatedAt?:         Date;
    category?:          string;
    createdAt?:         Date;
}

export interface Other {
    message: string;
    _id:     string;
    time:    Date;
    user?:   string;
}

