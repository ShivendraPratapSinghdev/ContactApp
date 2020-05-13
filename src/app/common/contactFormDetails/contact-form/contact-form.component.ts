import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetUpdateService } from '../../service/get-update.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: GetUpdateService
  ) { }
  contactForm: FormGroup;
  formValue: any;
  Object = Object;
  isSubmitted = false;
  contactDetail;
  private staticValue;
  ngOnInit(): void {
    this.createNewForm();

  }

  createNewForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          // Validators.pattern('^[a-z0-9._%+-]+@[a-z.-]+.[a-z]{2,4}$'),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.minLength]],
      status: ['', Validators.required],
      id: [''],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.activatedContacts();
    this.contactDetail = this.service.editedValue.value;
    this.service.editId.value != null ? this.contactForm.setValue(this.contactDetail) : this.newFlow();
  }
  editedFlow() {
    if ((this.contactDetail.firstName !== this.contactForm.controls.firstName.value ||
      this.contactDetail.lastName !== this.contactForm.controls.lastName.value) ||
      this.contactDetail.email !== this.contactForm.controls.email.value) {
      this.service.modal.value.forEach((e, i) => {
        if (this.service.editId.value === e.id) {
          const filteredArray = this.service.modal.value;
          filteredArray.splice(i, 1);
          filteredArray.push(this.contactForm.value);
          this.service.modal.next(filteredArray);
        }
      });
      this.service.editedValue.next(null);
      return this.contactForm.valid;
    }
  }
  intializeValue() {
    this.staticValue = this.service.modalNoValue.value;
    this.contactForm.setValue(this.staticValue);
  }
  newFlow() {
    this.contactForm.controls.status.setValue(true);
    if (this.contactForm.valid) {
      this.contactForm.controls.id.setValue(Math.random() * 100000);
      this.contactForm.controls.status.setValue(true);
      this.service.add(this.contactForm.value);
    }
    return (this.contactForm.valid && this.contactDetail == null);
  }
}
