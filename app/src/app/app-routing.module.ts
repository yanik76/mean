import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { UserActionRecordsComponent } from './user-action-records/user-action-records.component';


const routes: Routes = [
  {path: '', redirectTo: '/AccountComponent', pathMatch: 'full'},
  {path: 'account', component : AccountComponent},
  {path: 'account/:id', component : UserComponent},
  {path: 'records/:id', component: UserActionRecordsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
