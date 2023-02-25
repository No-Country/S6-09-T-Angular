export interface AuthResponse {
    user:  User;
    token: string;
    valid: boolean;
}

export interface User {
    _id?:          string;
    name?:         string;
    email?:        string;
    id_classroom?: any[];
    __v?:          number;
    valid?:        boolean;
}

