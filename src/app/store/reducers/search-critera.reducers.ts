import { createReducer, on } from "@ngrx/store";
import { Users } from "src/app/model/Users";
import { getUsers } from "../actions/";

export interface AppState {
}
export interface UsersState {
  users:Users
}
export const initialUsersState: UsersState = {
  users: undefined
};

export const usersReducer = createReducer(
  initialUsersState,
  on(getUsers, (state, action) => {
    return {
      users: action.users
    };
  })
);
