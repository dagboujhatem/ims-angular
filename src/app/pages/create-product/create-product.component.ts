import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product = {
    id: '',
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(){
    console.log(this.product);
    // ajouter les données dans le localstorage
    let products : any[] =  JSON.parse(localStorage.getItem('products') || "[]")
    this.product.id =  uuid.v4() // Date.now()
    products.push(this.product);
    localStorage.setItem('products', JSON.stringify(products))
    // navigate to list product
    this.navigateToListProduct()
  }

  navigateToListProduct(){
    this.router.navigateByUrl("/products")
    // let idCourse = 5
    // this.router.navigate(["/products", idCourse])
  }

}
