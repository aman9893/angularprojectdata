import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { DashbordComponent } from './stockmarket/dashbord/dashbord.component';
import { LoginStockComponent } from './stockmarket/login-stock/login-stock.component';
import { HomeStockComponent } from './stockmarket/stock-components/home-stock/home-stock.component';
import { LeadComponent } from './stockmarket/stock-components/Lead/lead/lead.component';



export const AppRoutes: Routes = [
    { path: '', component: DashbordComponent },
    { path: 'login', component: LoginStockComponent },
    { path: 'dashboard', component: DashbordComponent },
     
    // {
    //     path: 'gcr', component: DashbordComponent,
    //     children: [
    //         { path: 'home', component: HomeStockComponent },
    //         { path: 'lead', component: LeadComponent },
    //     ]
    // }

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
