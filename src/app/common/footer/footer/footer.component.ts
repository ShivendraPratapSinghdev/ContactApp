import { Component, OnInit, ViewChild } from '@angular/core';
import { GetUpdateService } from '../../service/get-update.service';
import { ContactFormComponent } from '../../contactFormDetails/contact-form/contact-form.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private service: GetUpdateService) { }
  @ViewChild(ContactFormComponent) contactForm: ContactFormComponent;
  ngOnInit(): void {
  }
  showDialog() {
    const modalt: HTMLElement = document.getElementById('modal_2');
    console.log(modalt);
    modalt.classList.remove('hhidden');
    modalt.classList.add('sshow');
  }
  closeDialog() {
    const modalt: HTMLElement = document.getElementById('modal_2');
    modalt.classList.remove('sshow');
    modalt.classList.add('hhidden');
    this.service.editId.next(null);
    this.service.editedValue.next(null);
  }
  OpenModal() {
    this.contactForm.intializeValue();
    // this.editContact = this.getUpdateService.editedValue.value;
    this.showDialog();
  }
  saveModal() {
    const result = this.contactForm.newFlow();
    if (result) {
      this.closeDialog();
    }
  }
}
