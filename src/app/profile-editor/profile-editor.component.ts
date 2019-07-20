import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  formModelValue = '';
  profileForm = new FormGroup( {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    })
  });

  constructor() { }

  ngOnInit() {

    // To set values for all the controls in the form.
    this.profileForm.setValue(
      {
      firstName: 'Dhamo',
      lastName: 'Krish',
      address: { street: 'Balaji', city: 'Perumalagaram', state: 'Karnataka', zip: 56001}
    }
    );

    // To set individual value in a form.
    this.profileForm.controls.firstName.setValue('Suresh');


  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.formModelValue = JSON.stringify(this.profileForm.value);
  }

  // Patch Value example
  updateProfile() {
    this.profileForm.patchValue({
        firstName: 'Savithri',
        address: {
          city: 'Canton',
          zip: '02021'
        }
    });
  }
}
