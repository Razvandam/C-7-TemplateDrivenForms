import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from './models/registration';
import { Gender } from './models/gender.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularForms';
  defaultGender = 'Male';
  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' },
  ];

  registrations: Registration[] = [
    {
      id: '1',
      fullName: {
        firstName: 'Stefan',
        lastName: 'TheGreat',
      },
      email: 'TheGreat@example.com',
      gender: Gender.Male,
      country: 'Romania',
    },
    {
      id: '2',
      fullName: {
        firstName: 'Mihai',
        lastName: 'TheBrave',
      },
      email: 'TheBrave@example.com',
      gender: Gender.Male,
      country: 'Romania',
    },
    {
      id: '3',
      fullName: {
        firstName: 'Queen',
        lastName: 'Maria',
      },
      email: 'QueenMaria@example.com',
      gender: Gender.Female,
      country: 'Romania',
    },
  ];

  defaultCountry = 'Romania';

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      // this.determineGender(form.value.gender)
      this.registrations.push(form.value);
      form.resetForm({
        email: 'standard@email.com'
      });
    }
  }

  // determineGender(gender: string) {
  //   if (gender === 'Male') {
  //     return (this.form.value.gender = Gender.Male);
  //   } else if (gender === 'Female') {
  //     return (this.form.value.gender = Gender.Female);
  //   } else {
  //     return (this.form.value.gender = Gender.Other);
  //   }
  // }

  // getGenderString(gender: Gender): string {
  //   switch (gender) {
  //     case Gender.Male:
  //       return 'Male';
  //     case Gender.Female:
  //       return 'Female';
  //     default:
  //       return 'Other';
  //   }
  // }

  @ViewChild('myForm') form!: NgForm;

  showRegistrationExample() {
    // this.form.value.fullName.firstName = 'Jane';
    // this.form.value.fullName.lastName = 'Smith';
    // this.form.value.email = 'jane.smith@example.com';
    // this.form.value.gender = 'Female';

    // this.form.setValue({
    //   country: '',
    //   hobbies: '',
    //   fullName: {
    //     firstName: 'Jane',
    //     lastName: 'Smith',
    //   },
    //   email: 'jane.smith@example.com',
    //   gender: 'Female',
    // });

    this.form.form.patchValue({
      fullName: {
        firstName: 'Jane',
        lastName: 'Smith',
      },
      email: 'jane.smith@example.com',
      gender: 'Female',
    });
  }
}
