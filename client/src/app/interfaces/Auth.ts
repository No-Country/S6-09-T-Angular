export interface AuthResponse {
    user:  User;
    token: string;
    valid: boolean;
}

export interface UsersResponse {
    users: User[];
    valid: boolean;
}

export interface User {
    _id?:          string;
    name?:         string;
    email?:        string;
    id_classroom?: any[];
    __v?:          number;
    online?:       boolean;
    valid?:        boolean;

}

export interface ResetPasswordResponse {
    valid: boolean;
    user?:  string;
}


