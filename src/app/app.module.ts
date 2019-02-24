import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adminLteConf } from './admin-lte.conf';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {MatCardModule} from '@angular/material/card';
import { MaterialsModules } from './material/material.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { CreateRestuarantComponent } from './create-restuarant/create-restuarant.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    MatCardModule,
    MaterialsModules,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    CreateRestuarantComponent
    // CreateRestuarantCompComponent,
    // RestuarantListComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
