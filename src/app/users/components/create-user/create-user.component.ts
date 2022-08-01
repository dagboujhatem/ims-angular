import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm? : FormGroup;
  submitted = false;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  createUser(){
    this.submitted =true;
    if(this.userForm?.invalid){
      return;
    }
    // Add new user using HTTP call (web service)
    this.userService.addNewUser(this.userForm?.value)
    .subscribe((response:any)=>{
       this.router.navigateByUrl('/users')
    },(error:any)=>{
      console.log(error);
    });
  }

}
