export interface AuthResponse {
    valid    :boolean;
    uid?     :string;
    email?   :string;
    name?    :string;
    token?   :string;
    msg?     :string;

}   

export interface User {
    uid:  string;
    name: string;
    email:string;
}
