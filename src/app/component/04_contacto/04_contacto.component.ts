import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContacFormService } from 'src/app/service/contacForm.service';

@Component({
  selector: 'app-04_contacto',
  templateUrl: './04_contacto.component.html',
  styleUrls: ['./04_contacto.component.css']
})
export class contactoComponent  {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private formService: ContacFormService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      empresa: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.formService.sendForm(this.contactForm.value);
      this.contactForm.disable()

    } else {
      this.snackBar.open(
        'Por favor complete todos los campos correctamente',
        'X',
        {
          duration: 5000,
          panelClass: ['snackbar'],
        }
      );
    }
  }
}


