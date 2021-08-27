import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private _httpClient: HttpClient) {}

    cart: Array<User> = new Array<User>()

    getUserById(userId: any) {
        return this._httpClient.get<User>("http://localhost:3000/users/${userId}");
    }
}