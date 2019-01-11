import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-stock',
  templateUrl: './login-stock.component.html',
  styleUrls: ['./login-stock.component.css']
})
export class LoginStockComponent implements OnInit {

  cookieValue: any;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar, public router: Router) { }

  loginForm: FormGroup;
  emaildata = "admin";
  passworddata = "12";

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({

      emp_unique_id: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      emp_password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }

  getError() {
    return ' *This is required feild'
  }
  cancel(): void {
    this.loginForm.reset();
  }

  onSubmit() {


    let emp_unique_id = this.loginForm['controls'].emp_unique_id.value;
    let emp_password = this.loginForm['controls'].emp_password.value;

    if (emp_unique_id === this.emaildata && emp_password === this.passworddata) {
      this.openSnackBar('Login Successfully', 'Dissmiss')
      // this.localStorageService.set('user',email)
      this.router.navigate(['/dashboard']);
    }
    else {
      this.openSnackBar(' Email and Password Not Matched', 'Dissmiss')
    }
  }

//     console.log(data);

//     if (this.loginForm.valid) {
//       this.dataService.loginEmpsideData(data).subscribe(
//         data => this.closeDialog(data),
//         err => console.log(err)
//       )}
//       this.loginForm.reset();
//   }
// }

//   closeDialog(data) {
//     console.log(data)
//     if(data.status === true){
//       //  this.authService.sendToken(data.token)
//        this.router.navigate(['/employee/dashboard']);
//        this.cookieService.set('empsideData', data.data);
//        this.openSnackBar(data.message, 'Dissmiss')
//     }

//     if(data.status ===false){
//       this.openSnackBar(data.message, 'Dissmiss')
//     }
//      console.log(data.messsage)
//   }
// }
}


