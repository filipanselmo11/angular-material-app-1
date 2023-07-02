import { Component } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  hideRequiredControl = new FormControl(false)
  floatLabelControl = new FormControl('auto' as FloatLabelType)
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto'
  }
}
