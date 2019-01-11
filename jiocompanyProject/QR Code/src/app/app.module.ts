import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material';
import { ProductListComponent } from './product-list/product-list.component';
import { MoreInfoDialogComponent } from './more-info-dialog/more-info-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { RouterModule } from '@angular/router';
import { ROUTING } from './routing';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { MmDetailsComponent } from './mm-details/mm-details.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MovementComponent } from './movement/movement.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { OGPdetailsComponent } from './ogpdetails/ogpdetails.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    MoreInfoDialogComponent,
    DashboardComponent,
    Dashboard1Component,
    
    ProductDetailComponent,
    ConfirmComponent,
    NavbarComponent,
    BasicViewComponent,
    MmDetailsComponent,
    QRCodeComponent,
    SupplierComponent,
    MovementComponent,
    MainNavComponent,
    OGPdetailsComponent,
    AttachmentsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,ROUTING,RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HeaderComponent,MoreInfoDialogComponent,QRCodeComponent],
})
export class AppModule { }
