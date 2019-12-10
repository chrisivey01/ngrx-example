import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from '../reducers/'
import * as fromUsers from '../reducers/';
import { Users } from 'src/app/model/Users';

export const selectUsersState =
    createFeatureSelector<UsersState>("users");



export const selectAllUsers = createSelector(
  selectUsersState,
  state => state.users

);
