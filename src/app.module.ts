import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ProduitComponent } from './app/composants/produit/produit.component';
import { CommonModule } from '@angular/common';
// Import components and services

@NgModule({
 declarations: [
 // Declare your components here
 ],
 imports: [
    CommonModule,
     BrowserModule,
 ProduitComponent,
 AppComponent
 ],
 providers: [],
 bootstrap: []
})
export class AppModule { }
