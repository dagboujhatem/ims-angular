import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/data/categories.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  categories : any[]= [];
  categoryForm?: FormGroup;
  submitted = false;
  isUpdate = false;
  updateIndex : any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getAllCategories();
    this.categoryForm = new FormGroup({
      id: new FormControl(uuid.v4()),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  addCatregory(){
    this.submitted = true;
    if(this.categoryForm?.invalid){
      return;
    }
    // ajouter dans la liste
    //this.categories.push(this.categoryForm?.value);
    this.categoriesService.addNewCategory(this.categoryForm?.value);
    this.categoryForm?.reset({
      id: uuid.v4(),
      name: '',
      description: ''
    })
    this.submitted= false
  }

  onDeleteLocal(i: any){
    // console.log(i);
    // this.categories.splice(i, 1)
    this.categoriesService.deleteCategory(i)
  }

  onUpdateLocal(i:any){
    // console.log(i);
    const currentCategory = this.categories[i];
    this.categoryForm?.patchValue(currentCategory);
    this.isUpdate = true;
    this.updateIndex = i;
  }

  updateCategory(){
    this.submitted = true;
    if(this.categoryForm?.invalid){
      return;
    }

    // update category
    this.categoriesService.updateCategoryByIndex(this.updateIndex, this.categoryForm?.value)
    this.categoryForm?.reset({
      id: uuid.v4(),
      name: '',
      description: ''
    });
    this.submitted= false;
    this.isUpdate = false;
  }

}
