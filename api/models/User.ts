import { BaseEntity } from "./BaseEntity.ts";

export interface User extends BaseEntity {
	username: string;
	password: string;
	name: string;
	email: string;
	role: number
}
