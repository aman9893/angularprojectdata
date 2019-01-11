import { Component, OnInit } from '@angular/core';
import { MoreInfoDialogComponent } from '../more-info-dialog/more-info-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }
  
moreinfo(event){
  event.stopPropagation()
  const dialogRef = this.dialog.open(MoreInfoDialogComponent, {
    width: '450px',
    data: 'data',
    autoFocus:false
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
  });
}

}
