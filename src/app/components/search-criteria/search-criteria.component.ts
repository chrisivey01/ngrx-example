import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Users } from 'src/app/model/Users';
import { SearchCriteriaService } from 'src/app/services/search-criteria.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/search-critera.reducers';
import { getUsers } from '../../store/actions'
import { selectAllUsers, selectUsersState } from 'src/app/store/selectors';
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  users$: Observable<Users>;
  data$: Observable<AppState>;
  constructor(private searchCriteriaService: SearchCriteriaService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.users$ = this.searchCriteriaService.getUsers()
    this.users$.subscribe(data => {
      this.store.dispatch(getUsers({users:data}));
    })
    this.data$ = this.store.select(selectAllUsers);
  }
}
