import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable()
export class UserService {
    constructor(private _httpClient: HttpClient) {}

    cart: Array<Admin> = new Array<Admin>()

    getUserById(adminId: any) {
        return this._httpClient.get<Admin>("http://localhost:3000/users/${adminId}");
    }
}