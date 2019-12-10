import { createAction, props } from '@ngrx/store';
import { Users } from 'src/app/model/Users';
import { Observable } from 'rxjs';

export const getUsers = createAction(
  "[Obtain Users] fetch users",
  props<{users:Users}>()
);
