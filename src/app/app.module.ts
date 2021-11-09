import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router/app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { NgPrimeModule } from './ng-prime/ng-prime.module';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRouterModule,
    SharedModule,
    PagesModule,
    NgPrimeModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
