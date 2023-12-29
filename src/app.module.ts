import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ProduitComponent } from './app/composants/produit/produit.component';
// Import components and services

@NgModule({
 declarations: [
 // Declare your components here
 AppComponent
 ],
 imports: [
 // Import Angular modules here
 BrowserModule,
 ProduitComponent
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
