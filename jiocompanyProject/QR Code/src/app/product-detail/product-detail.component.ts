import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import { ConfirmComponent } from 'src/app/confirm/confirm.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pending-description',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  constructor(private back_location: Location, private matDialog:MatDialog) { }

  ngOnInit() {
  }
  foods= [
    {value: 'pending1', viewValue: 'pending1'},
    {value: 'pending2', viewValue: 'pending2'},
    {value: 'pending3', viewValue: 'pending3'}
  ]

  moreinfo(){
  
    const dialogRef = this.matDialog.open(ConfirmComponent, {
      width: '450px',
      data: 'data',
      panelClass:'superviserDialog',
      autoFocus:false
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
}

goBack(): void {
  this.back_location.back();
}


Qr(){

  }

}
