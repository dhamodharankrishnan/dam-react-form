import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  formModelValue = '';

  phoneArrayItems: {
    id: number,
    areaCode: number,
    extension: number
  }[];

constructor(private fb: FormBuilder) { }
dates = [];

profileForm = this.fb.group(
  {
    firstName: new FormControl('', [Validators.required, Validators.minLength(8)]),
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    phoneArray: this.fb.array([])
  }
);

  ngOnInit() {

    this.phoneArrayItems = [];

    for( let index = 1; index <= 31; index++){
      this.dates.push(index);
    }
  

    // To set values for all the controls in the form.
    this.profileForm.setValue(
      {
      firstName: 'Dhamo',
      lastName: 'Krish',
      address: { street: 'Balaji', city: 'Perumalagaram', state: 'Karnataka', zip: 56001},
      phoneArray: [{id: 1, areaCode: 224, extension: 7039966}]
    }
    );

    // To set individual value in a form.
   // this.profileForm.controls.firstName.setValue('Suresh');


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

  get phoneArray() {
    return this.profileForm.get('phoneArray') as FormArray;
  }

  addPhone() {
    this.phoneArray.push(
      this.fb.group(
        {
          id: [''],
          areaCode: [''],
          extension: ['']
        }
      )
    );
  }

  deletePhone() {
    // this.images.removeAt(this.images.value.findIndex(image => image.id === 502))
    // this.phoneArray.removeAt(this.phoneArray.value)

    // for (let phoneItem of this.phoneArray.controls) {
    //   console.log('Id :'+ phoneItem.get('id').value );
    //   console.log('AreaCode :'+ phoneItem.get('areaCode').value );
    //   console.log('Extension :'+ phoneItem.get('extension').value );
    //   if(phoneItem.get('id').value === true){
    //     this.phoneArray.controls.
    //   }
    // }

    this.phoneArray.controls.forEach( function (phoneGroupItem, phoneIndex) {
      console.log(phoneGroupItem.get('id').value);
      // this.phoneArray.removeAt(phoneIndex);
    });

    this.phoneArray.removeAt(this.phoneArray.controls.findIndex( phoneItem => phoneItem.get('id').value === true));
  
   }
}
