import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserActionRecordsComponent } from './user-action-records/user-action-records.component';
// test date range filter
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; //https://stackoverflow.com/questions/59896928/how-to-create-a-date-range-filter-with-a-simple-setup-in-angular-6


// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    UserComponent,
    UserActionRecordsComponent,

  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
    // use  before npm install ng2-search-filter for the account search bar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }