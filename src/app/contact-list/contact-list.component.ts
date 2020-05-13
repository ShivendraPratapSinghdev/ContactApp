import { OnInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GetUpdateService } from '../common/service/get-update.service';
import { FormImplementation } from '../common/UXImplementation/form-data';
import { ContactFormComponent } from '../common/contactFormDetails/contact-form/contact-form.component';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor(
    public getUpdateService: GetUpdateService,
    private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
    }, 1000);
  }
  contactList;
  editContact: any = {};
  @ViewChild(ContactFormComponent) contactForm: ContactFormComponent;
  ngOnInit(): void {
    this.getUpdateService.activatedContacts();
    this.contactList = this.getUpdateService.filteredValue.value;
    console.log(this.contactList);
  }
  showDialog() {
    const modalt: HTMLElement = document.getElementById('modal_1');
    console.log(modalt);
    modalt.classList.remove('hhidden');
    modalt.classList.add('sshow');
  }
  closeDialog() {
    const modalt: HTMLElement = document.getElementById('modal_1');
    modalt.classList.remove('sshow');
    modalt.classList.add('hhidden');
    this.getUpdateService.editedValue.next(null);
  }
  editModal(details: string) {
    console.log(details);
    this.getUpdateService.open(details);
    this.editContact = this.getUpdateService.editedValue.value;
    this.contactForm.onSubmit();
    this.showDialog();
  }
  checkDialog() {
    const newValue = this.contactForm.editedFlow();
    if (newValue) {
      this.closeDialog();
    }
  }
  iterateAsper(index: number, detail: any) {
    return detail.code;
  }
}
