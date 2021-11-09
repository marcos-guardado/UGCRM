import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  imports: [CommonModule],
  exports: [
    MenubarModule,
    TableModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    ConfirmDialogModule,
    ToolbarModule,
    FieldsetModule,
  ],
})
export class NgPrimeModule {}
