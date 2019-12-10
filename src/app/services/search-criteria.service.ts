import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "../model/Users";
import { Store } from '@ngrx/store'
import { AppState } from '../store/reducers'
import { getUsers } from '../store/actions'

@Injectable()
export class SearchCriteriaService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  getUsers(): Observable<Users>{
    return this.http.get<Users>('http://localhost:8080/get-users')
  }

  
}
