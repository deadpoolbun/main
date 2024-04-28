import { Injectable } from "@nestjs/common";
import { User } from "src/users/users.entity";

@Injectable ()
export class DatasourceService{
    private users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }
}