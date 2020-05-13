import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ActivatePhoneNumberComponent } from './activate-Deactivate/activate-phone-number/activate-phone-number.component';
import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './common/contactFormDetails/contact-form/contact-form.component';
import { FooterComponent } from './common/footer/footer/footer.component';
import { ModalComponent } from './common/modal/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ActivatePhoneNumberComponent,
    NavigationBarComponent,
    ContactFormComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
