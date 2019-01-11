import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicViewComponent } from './basic-view/basic-view.component';

import { MmDetailsComponent } from './mm-details/mm-details.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MovementComponent } from './movement/movement.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { OGPdetailsComponent } from './ogpdetails/ogpdetails.component';
import { AttachmentsComponent } from './attachments/attachments.component';

export const AppRoutes: Routes = [
    { path: '', component: Dashboard1Component },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product_details', component: ProductDetailComponent },
    { path: 'pending', component: DashboardComponent },
    { path: 'project2', component: NavbarComponent },

    { path: 'navigation', component: MainNavComponent ,
    children: [ 
	    { path: 'basicview',component: BasicViewComponent },
        { path: 'mmdetails',component: MmDetailsComponent },
        { path: 'supplier',component: SupplierComponent },
        { path: 'movement',component: MovementComponent },
        { path:'ogpdetails' , component:OGPdetailsComponent},
        { path:'attachments' , component:AttachmentsComponent},
        
    ]
}




]


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
