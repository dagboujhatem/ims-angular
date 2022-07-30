import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories = [
    {id: uuid.v4(), name: 'category 1', description : 'desc 1'},
    {id: uuid.v4(), name: 'category 2', description : 'desc 2'},
    {id: uuid.v4(), name: 'category 3', description : 'desc 3'},
  ]
  constructor() { 
    console.log('instance created');
  }

  getAllCategories() {
    return this.categories;
  }

  addNewCategory(data: any){
    this.categories.push(data)
  }

  deleteCategory(i: any){
    this.categories.splice(i, 1)
  }

  updateCategoryByIndex(i: any, data: any){
    this.categories.splice(i, 1, data)
  }
}
