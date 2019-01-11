import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
    
  }

  onClose(){
    this.dialog.closeAll();
  }

  QRCode()
    {
        const dialogRef = this.dialog.open(QRCodeComponent, {
          width: '500px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
}
