import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTING } from './routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import { DashbordComponent } from './stockmarket/dashbord/dashbord.component';
import { HeaderComponent } from './stockmarket/header/header.component';
import { FooterComponent } from './stockmarket/footer/footer.component';
import { LoginStockComponent } from './stockmarket/login-stock/login-stock.component';
import { HomeStockComponent } from './stockmarket/stock-components/home-stock/home-stock.component';
import { LeadComponent } from './stockmarket/stock-components/Lead/lead/lead.component';
import { AddLeadComponent } from './stockmarket/stock-components/Lead/add-lead/add-lead.component';
import { DeleteLeadComponent } from './stockmarket/stock-components/Lead/delete-lead/delete-lead.component';
import { DetailsLeadComponent } from './stockmarket/stock-components/Lead/details-lead/details-lead.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    LoginStockComponent,
    HomeStockComponent,
    LeadComponent,
    AddLeadComponent,
    DeleteLeadComponent,
    DetailsLeadComponent,
  ],
  imports: [
    MaterialModule, BrowserAnimationsModule, ROUTING,
    BrowserModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
