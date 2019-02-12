import {Component, OnInit} from '@angular/core';
import {Photo} from '../shared/model/Photo.model';
import {PhotoService} from '../shared/service/photo.service';
import {Registration} from '../shared/model/Registration.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css', './page-two.admin.component.css']
})
export class PageTwoComponent implements OnInit {

  registration: Registration = new Registration();

  photo: Photo;

  /**
   *  for validation.
   * ***/
  formGroup: FormGroup;


  /**
   *  show error validation message.
   * **/
  isSubmitted = false;

  constructor(private photoService: PhotoService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createFormGroup();
    this.getAllPhoto();

  }

  createFormGroup() {
    return this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }


  get f() {
    return this.formGroup.controls;
  }


  saveUser() {
    this.isSubmitted = true;

    console.log(this.f.firstName.value);
    console.log(this.formGroup.invalid);
    if (this.formGroup.invalid === true) {
      return;
    } else if (this.formGroup.invalid === false) {

      this.registration = new Registration(
        this.f.firstName.value, this.f.lastName.value, this.f.email.value, this.f.password.value,
        this.f.code.value, this.f.phone.value
      );

      this.router.navigate(['/registration-status', this.registration]);
    }

  }


  /**
   *  Get all Photo
   * **/
  getAllPhoto() {
    this.photoService.getAllPhoto().subscribe((data: Photo) => {
      this.photo = data;
    });
  }


}
