import { Component, OnInit } from '@angular/core';
import { GetUpdateService } from '../../common/service/get-update.service';

@Component({
  selector: 'app-activate-phone-number',
  templateUrl: './activate-phone-number.component.html',
  styleUrls: ['./activate-phone-number.component.scss']
})
export class ActivatePhoneNumberComponent implements OnInit {
  public contactList;
  constructor(public getUpdateService: GetUpdateService) { }

  ngOnInit(): void {
    // this.getUpdateService.completeContactList();
    this.contactList = this.getUpdateService.modal.value;
  }
  update(id) {
    this.getUpdateService.modal.value.filter(e => {
      if (e.id === id) {
        console.log(e);
        e.status = !e.status;
      }
    });
    console.log(this.contactList);
  }

}
