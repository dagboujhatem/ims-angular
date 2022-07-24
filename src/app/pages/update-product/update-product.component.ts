import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: any;
  index: any;
  updateForm?: FormGroup;
  submitted = false;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.updateForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
        description: new FormControl('', [Validators.required, Validators.pattern(/test/gi)]),
        quantity: new FormControl('', [Validators.required, Validators.min(0)]),
        price: new FormControl('', [Validators.required, Validators.min(10)]),
        models : new FormArray([new FormControl('', [Validators.required])])
      })
      this.updateForm.controls['name'].valueChanges.subscribe(newValue=>{
        if(newValue=="coka"){
          this.updateForm?.addControl("subname", new FormControl('', [Validators.required])) // ajout d'un conrol 
          this.updateForm?.removeControl("quantity"); // remove control 
          this.updateForm?.controls['price'].setValidators([Validators.required])
        }else{
          this.updateForm?.addControl("quantity", new FormControl('', [Validators.required]))
          this.updateForm?.removeControl('subname')
        }
      })
    }

  get models(): FormArray{
    return this.updateForm?.controls['models'] as FormArray
  }

  addModel(){
    this.models.push(new FormControl('', [Validators.required]))
  }

  removeModel(i:any){
    this.models.removeAt(i)
  }

  ngOnInit(): void {
    this.getIDFromRoutePath()
  }

  getIDFromRoutePath() {
    // récupérer l'ID depuis le routing
    // this.productId = this.activatedRoute.snapshot.params["id"]
    // console.log(this.productId)
    
    // 2eme manière pour récupérer l'ID
    this.activatedRoute.paramMap.subscribe((res:any)=>{
      // console.log(res.params["id"]);
      this.productId = res.params["id"];
    })
    this.loadCurrentProduct()
  }

  loadCurrentProduct(){
    // récuperer l'objet du produit ayant le même ID
    let products : any[]= JSON.parse(localStorage.getItem('products') || '[]')
    this.index = products.findIndex(product => product.id == this.productId)
    let currentProduct = products[this.index];
    // console.log(currentProduct);
    // console.log(typeof this.productId)

    // step 2 : path the product in the form
    this.updateForm?.patchValue(currentProduct)    
  }


  updateProduct()
  {
    this.submitted= true;
      if(this.updateForm?.invalid){
        return;
      }
      // faire la mise à jours
      console.log(this.updateForm?.value);
      let products : any[]= JSON.parse(localStorage.getItem('products') || '[]');
      products.splice(this.index, 1, this.updateForm?.value)
      console.log(products);
      localStorage.setItem('products', JSON.stringify(products))
      this.router.navigate(['/products'])      

  }

}
