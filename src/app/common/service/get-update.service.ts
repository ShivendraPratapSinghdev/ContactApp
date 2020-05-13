import { Injectable } from '@angular/core';
import { FormImplementation } from '../../common/UXImplementation/form-data';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetUpdateService {
  private xyz: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    status: false,
    id: ''
  };
  private modals: any[] = [{
    firstName: 'Rajat',
    lastName: 'sharma',
    email: 'rajatSharma@gmail.com',
    phoneNumber: 7710028552,
    status: true,
    id: '123323'
  },
  {
    firstName: 'himanza',
    lastName: 'sheikh',
    email: 'himanzashiekh@gmail.com',
    phoneNumber: 7710028553,
    status: true,
    id: '1233'
  },
  {
    firstName: 'Ravish',
    lastName: 'Mohammad',
    email: 'RavishMohammad@gmail.com',
    phoneNumber: 7710028554,
    status: false,
    id: '123'
  }
  ];
  modalNoValue = new BehaviorSubject(this.xyz);
  modal = new BehaviorSubject(this.modals);
  editedValue = new BehaviorSubject(null);
  filteredValue = new BehaviorSubject(null);
  editId = new BehaviorSubject(null);
  constructor() { }

  remove(id: string) {
    // remove modal from array of active modals
    this.modal.subscribe(e => this.editedValue.next(e.filter(x => x.id !== id)));
  }

  open(id: string) {
    this.editId.next(id);
    // open modal specified by id
    this.modal.subscribe(e => this.editedValue.next(e.filter(x => x.id === id)[0]));
  }

  completeContactList() {
    this.modal.next(this.modals);
  }
  activatedContacts() {
    this.filteredValue.next(this.modal.value.filter(e => {
      if (e.status) {
        return e;
      }
    }));
    console.log(this.filteredValue.value);
  }
  add(indContact: FormImplementation) {
    const addObj = this.modal.value;
    addObj.push(indContact);
    this.modal.next(addObj);
  }
}
