import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: any[] = JSON.parse(localStorage.getItem('products') || '[]')
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(index: any)
  {
    // const index = this.products.findIndex(product => product.id === id)
    if(index !== -1){
      this.products.splice(index, 1)
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  }

}
