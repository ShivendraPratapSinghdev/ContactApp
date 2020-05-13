import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from '../app/contact-list/contact-list.component';
import { ActivatePhoneNumberComponent } from '../app/activate-Deactivate/activate-phone-number/activate-phone-number.component';

const routes: Routes = [
  { path: '', redirectTo: 'contactlist', pathMatch: 'full' },
  { path: 'contactlist', component: ContactListComponent },
  {
    path: 'activateDeactivate',
    component: ActivatePhoneNumberComponent,
  },
  { path: '**', redirectTo: 'contactlist' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
