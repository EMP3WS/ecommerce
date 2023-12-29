import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Model/produit';




@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [],
  templateUrl:'./produit.component.html',
  styleUrl:'./produit.component.css'
})
export class ProduitComponent  implements OnInit{
   myProduct: Produit = new Produit();

  constructor(){}
  ngOnInit():void{
    this.myProduct = 
      {id:1, title:'T',price:100,quantity:34,like:0},{id:2,title:"V", price :570,quantity:67, like:0},
      {id:3,title:"Y", price :250,quantity:78, like:0}
    ;
}






}
