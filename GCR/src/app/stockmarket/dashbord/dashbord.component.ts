import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  constructor( public router: Router, public dialog: MatDialog, )
     {
  }
  cookieValue;
  cookiesData

  ngOnInit() {

    // this.cookieValue = this.cookieService.get('empsideData');
    // this.cookiesData = JSON.parse(this.cookieValue);
    // console.log(this.cookiesData);

    // this.getLocation()

  }


  Logout() {
    this.router.navigate(['/login']);
    // this.cookieService.delete('empsideData');
  }
  // resetpasdswordDialog(): void {

  //   let dialogRef = this.dialog.open(ResetPasswordComponent, {
  //     width: '500px',
  //     height: 'auto',
  //     data: '',
  //     autoFocus: true
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // if (typeof result === 'object') {
  //     //   if (result.status === true) {
  //     //     var lastInsertedData = result.result[0];
  //     //     this.contactTypeData.push(lastInsertedData);
  //     //     this.openSnackBar(result.message, 'Dismiss')

  //   });
  // }

}