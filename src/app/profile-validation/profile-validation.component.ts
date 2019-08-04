import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { minLengthValidator } from './min-length-validator';

@Component({
  selector: 'app-profile-validation',
  templateUrl: './profile-validation.component.html',
  styleUrls: ['./profile-validation.component.css']
})
export class ProfileValidationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  profileValidationForm = this.fb.group(
    {
          firstName: new FormControl('', [Validators.required, Validators.maxLength(10)])
    }
  );

  get firstName() {
    return this.profileValidationForm.get('firstName');
  }

  ngOnInit() {
  }

}
