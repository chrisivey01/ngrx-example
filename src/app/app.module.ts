import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { HttpClientModule } from '@angular/common/http';

import { SearchCriteriaService } from './services/search-criteria.service'
import { StoreModule } from '@ngrx/store'
import { usersReducer } from './store/reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('users', usersReducer),
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [SearchCriteriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
