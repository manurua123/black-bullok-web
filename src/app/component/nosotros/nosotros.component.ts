import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent implements OnInit {

  ngOnInit() {}

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
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
      // aquí enviarías los datos del formulario a través de tu servicio o API
      // en este ejemplo simplemente mostramos un mensaje de éxito
      this.snackBar.open('¡Gracias por contactarnos!', 'X', {
        duration: 5000,
         panelClass: ['snackbar']
      });
      this.contactForm.reset();
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
