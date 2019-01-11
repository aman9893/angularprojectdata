import { Component, OnInit } from '@angular/core';
import { QRCodeComponent } from '../qrcode/qrcode.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  QRCode() {
    const dialogRef = this.dialog.open(QRCodeComponent, {
      width: '500px',
      data: 'aman'
    });
  }

  navigation(){
    
  }
}
