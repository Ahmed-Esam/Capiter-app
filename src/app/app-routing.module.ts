import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListingComponent } from './components/listing/listing.component';
import { SingleUserComponent } from './components/single-user/single-user.component';

const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'singleUser', component: SingleUserComponent },
  { path: 'addUser', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
