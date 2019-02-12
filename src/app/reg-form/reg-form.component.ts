import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Registration} from '../shared/model/Registration.model';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  registration: Registration = new Registration();
  isInfo: boolean;
  isInfoUser: boolean;

  constructor(private idNumber: ActivatedRoute) {
    idNumber.params.subscribe((p: Registration) => {
      this.registration = p;
      if (Object.keys(p).length === 0) {
        this.isInfo = true;
        this.isInfoUser = false;
      } else {
        this.isInfo = false;
        this.isInfoUser = true;
      }

    });
  }

  ngOnInit() {

  }

}
