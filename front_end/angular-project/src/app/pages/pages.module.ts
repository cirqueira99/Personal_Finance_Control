import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BanksComponent } from './banks/banks.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { CostsComponent } from './costs/costs.component';
import { SharedComponent } from './shared/shared.component';



@NgModule({
  declarations: [
    HomeComponent,
    BanksComponent,
    RevenuesComponent,
    CostsComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
