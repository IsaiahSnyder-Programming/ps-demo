import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: 'light',
    subscriptionType: 'Monthly',
    notes: ''
  }

  userSettings : UserSettings = { ...this.originalUserSettings }

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel) {
    console.log('in onBlur', field.valid);

  }

  onSubmit(form: NgForm) {
    console.log('in onsubmit', form.valid);
  }

}
