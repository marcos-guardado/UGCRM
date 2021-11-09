import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NgPrimeModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
