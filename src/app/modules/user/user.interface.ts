/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'faculty' | 'student';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(plainTextPassword: string, hashPassword: string): Promise<boolean>;
}
