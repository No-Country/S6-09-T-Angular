export interface ClassroomResponse {
    _id?: string;
    user_id?: string;
    classroom_name?: string;
    users?: string[];
    other?: Message[];
    __v?: number;
    updatedAt?: Date;
    category?: string;
    createdAt?: Date;
    valid?: boolean;

}

export interface ChatResponse {
    [key: number]: any;
    _id?: string;
    user_id?: string;
    classroom_name?: string;
    users?: string[];
    other?: Message[];
    __v?: number;
    updatedAt?: Date;
    category?: string;
    createdAt?: Date;
    valid?: boolean;

}

export interface Message {
    message: string;
    _id: string;
    time?: Date;
    user: string;
}

