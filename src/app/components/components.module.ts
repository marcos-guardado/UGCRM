import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [CommonModule, NgPrimeModule],
  declarations: [
    ConfirmDialogComponent
  ],
})
export class ComponentsModule {}
