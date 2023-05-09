import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ContacFormService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  url = 'https://hook.us1.make.com/eb5mdfcuch6651clvuvxxh36ly03q42e';
  sendForm(data: any) {
    this.http.post(this.url, data).subscribe({
      next: (data) => {
        this.openSnackBar('¡Gracias por contactarnos!');
      },
      error: (error) => {
        this.openSnackBar('¡Gracias por contactarnos!');
      },
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['snackbar'],
    });
  }
}
